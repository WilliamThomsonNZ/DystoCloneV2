// SPDX-License-Identifier: MIT
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/utils/math/Math.sol";
pragma solidity ^0.8.0;

contract DystoCloneToken is ERC20 {
    //Creates an interface of the erc721 dystoclone token.

    uint256 public dailyRate = 100 ether;
    uint256 public lastEpoch = 1924991999;

    mapping(address => uint256) rewards;
    mapping(address => uint256) lastUpdate;

    IERC721 public dystoClone;

    constructor(address _dystoCloneAddress) ERC20("DystoCloneToken", "DCT") {
        dystoClone = IERC721(_dystoCloneAddress);
    }

    function claimReward() external {
        require(lastUpdate[msg.sender] < lastEpoch, "CLAIM_HAS_ENDED");
        uint256 calculatedRewards = rewards[msg.sender] +
            calculateRewards(msg.sender);
        require(calculatedRewards > 0, "NOTHING_TO_CLAIM");
        rewards[msg.sender] = 0;
        //Need this otherwise you will be able to claim from the beginning allways
        lastUpdate[msg.sender] = block.timestamp;
        _mint(msg.sender, calculatedRewards);
    }

    function calculateRewards(address _account)
        internal
        view
        returns (uint256)
    {
        uint256 claimableEpoch = Math.min(block.timestamp, lastEpoch);
        uint256 timeDifference = claimableEpoch - lastUpdate[_account];
        if (timeDifference < 0) {
            //Calculates the rate
            uint256 standardRewardRate = dystoClone.balanceOf(_account) *
                ((dailyRate * timeDifference) / 86400);
            //Bonus rate for holders of more than 1 dysto clone
            uint256 bonusRate = (calculateBonusAmount(msg.sender) *
                timeDifference) / 86400;
            return standardRewardRate + bonusRate;
        }
        return 0;
    }

    function calculateBonusAmount(address _account)
        internal
        view
        returns (uint256)
    {
        uint256 dystoCloneBalance = dystoClone.balanceOf(_account);
        if (dystoCloneBalance >= 20) return 400 ether;
        if (dystoCloneBalance >= 10) return 150 ether;
        if (dystoCloneBalance >= 5) return 50 ether;
        if (dystoCloneBalance >= 2) return 10 ether;
        return 0;
    }

    function getClaimableRewards(address _account)
        public
        view
        returns (uint256)
    {
        return rewards[_account] + calculateRewards(_account);
    }

    function updateReward(
        address _from,
        address _to,
        uint256 _tokenId
    ) external {
        require(
            _from == address(0) || dystoClone.ownerOf(_tokenId) == _from,
            "NOT_OWNER_OF_APE"
        );
        require(msg.sender == address(dystoClone), "ONLY_DYSTOCLONE_CONTRACT");
        //Ensures that when an owner of nft transfers out they don't lose their rewards
        if (_from != address(0)) {
            if (lastUpdate[_from] > 0 && lastUpdate[_from] < lastEpoch) {
                rewards[_from] += calculateRewards(_from);
            }
            lastUpdate[_from] = block.timestamp;
        }
        if (_to != address(0)) {
            if (lastUpdate[_to] > 0 && lastUpdate[_to] < lastEpoch) {
                rewards[_to] += calculateRewards(_to);
            }
            lastUpdate[_to] = block.timestamp;
        }
    }
}
