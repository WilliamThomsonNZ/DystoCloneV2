// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

interface IDystoCloneToken {
    function updateReward(
        address _from,
        address _to,
        uint256 _tokenId
    ) external;

    function getClaimableRewards(address _account)
        external
        view
        returns (uint256);

    function claimReward() external;
}

contract DystoClone is ERC721Enumerable, Ownable {
    using Strings for uint256;
    uint256 public maxTotalSupply = 4444;
    uint256 public mintPrice = 0.044 ether;
    uint256 public maxWhitelistMint = 2;
    uint256 public maxPerTx = 5;
    bool private whitelistActive = false;
    bool paused = true;
    //Keep track of the  amount minted by a certain address
    mapping(address => uint256) private amountMinted;
    bytes32 private whitelistMerkleRoot;

    event whiteListStateChange(bool _whiteListActive);
    IDystoCloneToken public dystoCloneToken;

    constructor() ERC721("Dysto Clone", "DC") {}

    function setWhitelistActive(bool _value) public onlyOwner {
        whitelistActive = _value;
        emit whiteListStateChange(_value);
    }

    function setContractPause(bool _value) public onlyOwner {
        paused = _value;
    }

    function setWhitelistMerkleRoot(bytes32 _root) public onlyOwner {
        whitelistMerkleRoot = _root;
    }

    function mintWhitelist(bytes32[] calldata _proof, uint256 _mintAmount)
        external
        payable
    {
        uint256 supply = totalSupply();
        require(whitelistActive == true, "Whitelist is not active");
        require(
            supply + _mintAmount <= maxTotalSupply,
            "Unable to mint that many"
        );
        require(
            msg.value >= mintPrice * _mintAmount,
            "Mint price is 0.044 ether per NFT"
        );

        require(
            amountMinted[msg.sender] + _mintAmount <= maxWhitelistMint,
            "Can not mint that many"
        );
        bytes32 leaf = keccak256(abi.encodePacked(msg.sender));
        require(
            MerkleProof.verify(_proof, whitelistMerkleRoot, leaf),
            "Not on whitelist"
        );

        amountMinted[msg.sender] += _mintAmount;
        _safeMint(msg.sender, _mintAmount);
    }

    function mintPublic(uint256 _mintAmount) external payable {
        uint256 supply = totalSupply();
        require(paused == false, "Sale is not active");
        require(
            supply + _mintAmount <= maxTotalSupply,
            "Unable to mint that many"
        );
        require(
            msg.value >= mintPrice * _mintAmount,
            "Mint price is 0.044 ether per NFT"
        );
        require(_mintAmount <= maxPerTx, "Maximum per transaction is 5");

        amountMinted[msg.sender] += _mintAmount;
        _safeMint(msg.sender, _mintAmount);
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal virtual override {
        dystoCloneToken.updateReward(from, to, tokenId);
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function setDystoCloneToken(address _token) external onlyOwner {
        require(_token != address(dystoCloneToken), "TOKEN_ALREADY_SET");
        require(_token != address(0), "TOKEN_ADDRESS_ZERO");
        dystoCloneToken = IDystoCloneToken(_token);
    }

    function withdraw() public payable onlyOwner {
        (bool success, ) = payable(msg.sender).call{
            value: address(this).balance
        }("");
        require(success);
    }
}
