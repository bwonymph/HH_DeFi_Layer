pragma solidity ^0.5.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";

contract wrappedHBAR is ERC20, ERC20Detailed {

	uint256 tokensupply;
    constructor(uint256 initialSupply) ERC20Detailed("wrappedHBAR", "WHBAR", 10) public {
        _mint(msg.sender, initialSupply);
        tokensupply = initialSupply;
    }

    modifier onlyminter()


    function getMinter() returns(address){
    	return minter;
    }

    function isMinter(address account){
    	returns bool;
    }

    function setMinter(address nm) onlyminter returns(bool success){
    	minter = nm;
    }


   	function mintWHBAR(address receiver, uint value) onlyminter returns(bool success){
   		if (isValid(address addr) == true){
   			///mint that whbar
   		}
   		else{
   			///return invalid HCS approval
   		}

   	}
   	function isValid(address addr) returns(bool){
   		racles o = oracles(oracles.sol contract address);
   		o.request();
   	}

   	function tokenSupply(uint256 adjustment){
   		tokensupply = tokensupply+adjustment;
   	}

   	function totalSupply() returns(uint){
   		returns tokensupply;
   	}

   	function tokenBurn(){
   		///Burn tokenSupply
   	}

}