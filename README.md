Upgradable USDT smart contract ( used oppenzepplin/hardhat upgrade to make upgradable contract )

1. 0xAb77bC8051a9b335D44F93B829B3a456755fd505 - proxy contract address (admin can access this to upgrade smart contract)
2. 0x323CD279f36f40629EF74EF031E490e8F7cBD887 - implimentation contract address (all function of usdt smart contract)- V1
3. 0x21a97dcffe30c82c5fb09df0a0b75446e2fcf4df1a2faff7e2741f49b6781c33 - trsxn hash of transaction performed on deployed upgradable usdt smart contract
4. 0xc759DC5E36cdB22459E41be7538c36e9DFbE23eD - address of admin/deployer

Nodejs-mysql

1. used remote mysql server : db4free.net
2. used transaction hash to get details of transaction using routescan fast api.
3. database name:- trsxn_detail
4. table name:- transaction
5. <img width="1319" alt="Screenshot 2023-12-17 at 10 33 31 PM" src="https://github.com/RSpec25/assignment-intern/assets/97079750/e3b9e2a7-674a-4762-98cc-3e58384a911e">
6. get request used:- /v2/network/{networkId}/evm/{chainId}/transactions/{transactionId}
7. facing some issues in calling for snowtrace testnet transaction, was working fine for mainnet transactions.
