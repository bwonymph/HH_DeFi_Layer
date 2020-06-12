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

   		}

   	}
   	function isValid(address addr) returns(bool){
   		Oracles oracle;
   		
   	}

   	function tokenSupply(){

   	}

}