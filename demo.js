//oracleserver.js
// Oracle server serves as server to initiate all functions for HBAR transfers and HCS aunthentications. In future and live implementation, this would be an autonomous script/smart contract/organization to ensure maximum decentralization.
// For purpose of this hackathon, this server serves as a simplified controller and demonstrates flow for all interactions. 


var Web3 = require('web3');

const { Client, AccountBalanceQuery } = require("@hashgraph/sdk");


var operatorPrivateKey = ""; //address ommitted
var operatorAccount = ""; // account ommitted
var topicId = ""; // Ommitted but taken from initial.js

// Mint Tokens functions for minting wrapped HBAR tokens on the Ethereum network. 
// This function is called 
async function mintTokens(){

	//Error Checking
    if (operatorPrivateKey == null || operatorAccount == null) {
        throw new Error("environment variables OPERATOR_KEY and OPERATOR_ID must be present");
    }

    const client = Client.forTestnet();

    client.setOperator(operatorAccount, operatorPrivateKey);

    //First mercehant sends token minting intent to HCS 

    new ConsensusSubmitMessageTransaction()
        .setTopicId(topicId)
        .setMessage('Initiating Token Minting from Merchant')
        .execute(client)

    // Once intent is sent, HBAR is sent to custodian who mints the Tokens 

    // For point of Demo we will set this to 1000 HBAR

    const receipt = await (await new CryptoTransferTransaction()
        .addSender(operatorAccount, 1)
        .addRecipient("0.0.44516", 1)
        .setTransactionMemo("Minting Value 1000 HBAR -> 1000 wHBAR")
        .execute(client))
        .getReceipt(client);

    console.log(receipt);

    new ConsensusSubmitMessageTransaction()
        .setTopicId(topicId)
        .setMessage('HBAR Transfer 1000 HBAR -> 1000 wHBAR')
        .execute(client)

    //Once HBAR is received custodian mints tokens, and this is recorded to HCS

    xhr.open("GET", "https://api-testnet.dragonglass.me/hedera/api/transactions?accountFrom=0.0.68333"); // Verify transaction through Dragonglass
	xhr.setRequestHeader("X-API-KEY", ""); //Key Omitted
	xhr.send();

	// If request is verified, call smart contract to mint tokens
	//if response = good

	const web3 = new Web3(window.ethereum);
	await window.ethereum.enable();

	const tokenContract = web3.eth.Contract(contract_abi, contract_address);

	// Oracle Smart Contract will interact with wHBAR smart contract. This interaction would be from the Oracle oracle
	const tokenSupply = tokenContract.method.supplyGet().get();
	const newTokenSupply = tokenSupply + 1000;
	tokenContract.method.supplySet().set(newTokenSupply);

    //Once minting completed, custodian sends tokens to merchant's ETH address

    //Oracle oracle reports to HCS

    //wHBAR tokens are minted, price and supply is noted in HCS. 


}

// Standard call to purchase tokens from merchant to client across chains
async function purchaseTokens(){}

	//User initaites intent to merchant 

	//Error Checking
    if (operatorPrivateKey == null || operatorAccount == null) {
        throw new Error("environment variables OPERATOR_KEY and OPERATOR_ID must be present");
    }

    const client = Client.forTestnet();

    client.setOperator(operatorAccount, operatorPrivateKey);

    //First merchant sends token minting intent to HCS 

    new ConsensusSubmitMessageTransaction()
        .setTopicId(topicId)
        .setMessage('Initiating 1000 wHBAR purchase from user')
        .execute(client)

	//Merchant chooses to accept transaction

	new ConsensusSubmitMessageTransaction()
        .setTopicId(topicId)
        .setMessage('Merchant accepts 1000 wHBAR purchase from user')
        .execute(client)

	//Merchant sends wHBAR to escrow smart contract





	//User sends HBAR to Merchant

	//When HBAR is received, escrow smart contract sends wHBAR to account


// Token Burn function for custodians when HBAR is redeemed to reduce wHBAR supply
async function burnTokens(){



	const web3 = new Web3(window.ethereum);
	await window.ethereum.enable();

	const tokenContract = web3.eth.Contract(contract_abi, contract_address);

	// wHBAR Smart Contract will interact with call Oracle contract to verify. This interaction would be from the Oracle oracle
	const tokenSupply = tokenContract.method.supplyGet().get();
	const newTokenSupply = tokenSupply - 1000;
	tokenContract.method.supplySet().set(newTokenSupply);
}


