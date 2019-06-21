pragma solidity ^0.5.0;

contract Token {
    string public name = "Coinstance";
    string public symbol = "CNC";
    uint256 public decimals = 5;
    uint256 public totalSupply;

    constructor() public {
        totalSupply = 10000 * (10 ** decimals);
    }
}
