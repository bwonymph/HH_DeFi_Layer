pragma solidity ^0.6.0;

/// extremely simplified escrow contract to handle wHBAR transfers

contract Escrow {
    enum State { AWAITING_PAYMENT, AWAITING_TRANSFER, COMPLETE }
    
    State public currState;
    
    address public buyer;
    address payable public merchant;
    
    modifier onlyBuyer() {
        require(msg.sender == buyer, "Only buyer can call this method");
        _;
    }
    
    constructor(address _buyer, address payable _merchant) public {
        buyer = _buyer;
        merchant = _merchant;
    }
    
    function deposit() onlyBuyer external payable {
        require(currState == State.AWAITING_PAYMENT, "Already paid");
        currState = State.AWAITING_TRANSFER;
    }
    
    function confirmDelivery() onlyBuyer external {
        require(currState == State.AWAITING_TRANSFER, "Cannot confirm token transfer");
        seller.transfer(address(this).balance);
        currState = State.COMPLETE;
    }
}