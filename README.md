# HH_DeFi_Layer

This repository contains the POC of a HH DeFi Layer built for the Hedera20 Hackathon. 

The goal of this project is to create a trusted DeFi layer to encourage decentralized finance operations on the Hedera Hashgraph Network. Using HCS as an auditing record, a verifiable trail of transactions 

The example usecase of this layer is the creation of a wrapped HBAR token on the Ethereum network. The wrapped HBAR token is an ERC20 token which value is pegged against a singular HBAR. This vastly opens the usage of HBAR in defi ecosystems largely built on the Ethereum network, and increases opportunities for HBAR holders and the Hedera Community.

This layer can also be used in generating stable coins and swaps on the Hedera network. Using the HCS audit framework here, interactions can be fully documented in creation/burn of tokens to prevent malicious actions. 

How this can be improved in future:

Autonomous self-sufficient smart contract to serve as Custodian and merchant parties on a Hedera network. Theoretically, a sufficiently utilized contract can stake its HBAR to generate enough HBAR staking rewards to pay for its own transactions and fees. This allows the contract to manage itself without the need of a governing address/entity to contribute HBAR to it. 