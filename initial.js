//initial.js
//Setup for DeFi layer

// Create HCS Topic for Wrapped HBAR interactions
const {
    Client,
    ConsensusTopicCreateTransaction,
    ConsensusSubmitMessageTransaction
} = require("@hashgraph/sdk");

async function main() {
    const operatorPrivateKey = ""; //Omit Key
    const operatorAccount = ""; //Omit Address

    if (operatorPrivateKey == null || operatorAccount == null) {
        throw new Error("environment variables OPERATOR_KEY and OPERATOR_ID must be present");
    }

    const client = Client.forTestnet();
    client.setOperator(operatorAccount, operatorPrivateKey);

    const transactionId = await new ConsensusTopicCreateTransaction()
        .setTopicMemo("H20 DeFi WHBAR Hushpuppy Example")
        .setMaxTransactionFee(100000000000)
        .execute(client);


    const transactionReceipt = await transactionId.getReceipt(client);
    const topicId = transactionReceipt.getConsensusTopicId();

    console.log(`topicId = ${topicId}`);

    new ConsensusSubmitMessageTransaction()
        .setTopicId(topicId)
        .setMessage('Initiating DeFi wHBAR Topic')
        .execute(client)

    console.log("Created Topic");

}

main()
