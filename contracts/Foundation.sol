pragma solidity ^0.4.11;

import "./zeppelin/token/StandardToken.sol";


contract Foundation is StandardToken {

    event Withdraw(address who, uint amount);

    function collect() payable {
        balances[msg.sender] = balances[msg.sender].add(msg.value*1000);
    }

    function approveFoundation(uint amount) { 
        super.approve(this, amount);
    }

    function transferByFoundation(address from, address to, uint amount) {
        this.transferFrom(from, to, amount);
    }

    function withdraw() {
        uint256 b = balances[msg.sender].div(1000).mul(9).div(10);
        msg.sender.transfer(b);
        Withdraw(msg.sender, b); 
    }

    function getFoundationBalance() constant returns(uint) {
        return this.balance;
    }
}

