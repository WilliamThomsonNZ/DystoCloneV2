// SPDX-License-Identifier: MIT

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
pragma solidity ^0.8.7;

interface IScrapToken {
    function updateReward(
        address _from,
        address _to,
        uint256 _tokenId
    ) external;

    function getClaimableReward(address _account)
        external
        view
        returns (uint256);

    function claimReward() external;
}

contract DystoApez is ERC721, Ownable {
    using Strings for uint256;
    uint256 public maxSupply = 4444;
    uint256 public mintPrice = 0.044 ether;
    uint256 public tokenID = 0;

    IScrapToken public scrapToken;

    constructor() ERC721("DystoApez", "DA") {}

    function mint(uint256 _amount) public payable {
        require(_amount + tokenID <= maxSupply, "MAX_SUPPLY_REACHED");
        require(msg.value == (mintPrice * _amount), "INVALID_ETH_SENT");
        for (uint256 i = 1; i <= _amount; i++) {
            _safeMint(msg.sender, tokenID + i);
        }
        tokenID += _amount;
    }

    function setScrapToken(address _account) public onlyOwner {
        scrapToken = IScrapToken(_account);
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal virtual override {
        scrapToken.updateReward(from, to, tokenId);
        super._beforeTokenTransfer(from, to, tokenId);
    }
}
