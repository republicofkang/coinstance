pragma solidity ^0.5.0;

contract Migrations {
  address public owner;
  uint public last_completed_migration;

  constructor() public {
    owner = msg.sender;
  }

  modifier restricted() {
    if (msg.sender == owner) _;
  }

  function setCompleted(uint completed) public restricted {
    last_completed_migration = completed;
  }

  function upgrade(address new_address) public restricted {
    Migrations upgraded = Migrations(new_address);
    upgraded.setCompleted(last_completed_migration);
  }
}

contract Token{
  string public name = "Coinstance";
  string public symbol = "CNC";
    uint256 public decimals = 18;
    uint256 public totalSupply;
    constructor() public {
        totalSupply = 1000000 * (10 ** decimals);
    }
}
