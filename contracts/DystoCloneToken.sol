// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;
import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/utils/math/Math.sol";

contract ScrapToken is ERC20("Scrap", "SCRAP"), Ownable {
    uint256 public DAILY_RATE = 100 ether;
    uint256 public LAST_EPOCH = 1924991999;
    mapping(address => uint256) public rewards;
    mapping(address => uint256) public lastUpdate;
    mapping(address => bool) public claimedTokens;

    IERC721 public dystoApez;

    constructor(address _dystoApez) {
        dystoApez = IERC721(_dystoApez);
    }

    function claimTokens() public {
        require(dystoApez.balanceOf(msg.sender) > 0, "DOESNT_OWN_DYSTOAPE");
        uint256 claimableAmount = rewards[msg.sender] +
            calculateRewards(msg.sender);
        require(claimableAmount > 0, "NO_CLAIMABLE_TOKENS");
        console.log(claimableAmount);
        rewards[msg.sender] = 0;
        lastUpdate[msg.sender] = block.timestamp;
        _mint(msg.sender, claimableAmount);
    }

    function calculateRewards(address _account)
        internal
        view
        returns (uint256)
    {
        // This must be how the amount in calculated
        uint256 claimableEpoch = Math.min(block.timestamp, LAST_EPOCH);
        uint256 timeDifference = claimableEpoch - lastUpdate[_account];
        if (timeDifference > 0) {
            //The end of this statement gives us per day.
            uint256 bonus = (calculateBonus(_account) * timeDifference) / 86400;
            uint256 dailyIncome = dystoApez.balanceOf(_account) *
                ((DAILY_RATE * timeDifference) / 86400);
            console.log("calculatedRewards", bonus, dailyIncome);
            return bonus + dailyIncome;
        }
        return 0;
    }

    function updateReward(
        address _from,
        address _to,
        uint256 _tokenID
    ) external {
        require(
            _from == address(0) || dystoApez.ownerOf(_tokenID) == _from,
            "NOT_OWNER_OF_APE"
        );
        require(msg.sender == address(dystoApez), "ONLY_DYSTOAPEZ");
        //Not the contract
        if (_from != address(0)) {
            //Checks the last time the user claimed was above 0 and that tokens are still claimable
            if (lastUpdate[_from] > 0 && lastUpdate[_from] < LAST_EPOCH) {
                rewards[_from] += calculateRewards(_from);
            }
            lastUpdate[_from] = block.timestamp;
        }
        if (_to != address(0)) {
            //Checks the last time the user claimed was above 0 and that tokens are still claimable
            if (lastUpdate[_to] > 0 && lastUpdate[_to] < LAST_EPOCH) {
                rewards[_to] += calculateRewards(_to);
            }
            lastUpdate[_to] = block.timestamp;
        }
    }

    function calculateBonus(address _account) internal view returns (uint256) {
        uint256 amountOfApes = dystoApez.balanceOf(_account);
        if (amountOfApes >= 20) return 400 ether;
        if (amountOfApes >= 10) return 150 ether;
        if (amountOfApes >= 5) return 50 ether;
        if (amountOfApes >= 2) return 10 ether;
        return 0;
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual override {
        super._beforeTokenTransfer(from, to, amount);
    }
}
