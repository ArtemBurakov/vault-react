# Vault App

Securely manage your funds on the Ethereum blockchain with this user-friendly vault application.

## Technologies Used

1. React
2. Web3-react
3. Ethers.js
4. Bootstrap

## Features

1. Deposit, withdraw, and track your balance within the vault contract.
2. Connect with your preferred wallet using flexible web3-react integration.
3. Interact with the smart contract seamlessly using ethers.js.
4. Receive informative feedback through toast notifications with Bootstrap styling.

## Deployed App

The app is deployed and can be accessed at https://artemburakov.github.io/vault-react/

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/ArtemBurakov/vault-react.git
cd vault-app
```

### Install

```bash
npm install
```

### Create a .env file in the root directory of the project and add the following variables:

```bash
REACT_APP_MIN_DEPOSIT_AMOUNT=   # Set the minimum deposit amount
REACT_APP_DEFAULT_DEPOSIT_AMOUNT=   # Set the default deposit amount

REACT_APP_VAULT_CONTRACT_ADDRESS=   # Set the address of your vault contract
```

### Run Locally

```bash
npm start
```

> Open your browser and navigate to http://localhost:3000 to view the app.

## Connecting to a Smart Contract

To interact with the smart contract:

1. Connect to an existing smart contract by setting the REACT_APP_VAULT_CONTRACT_ADDRESS in the .env file.
2. Deploy your smart contract on a testnet or mainnet and update the REACT_APP_VAULT_CONTRACT_ADDRESS accordingly.

> For deploying your smart contract or more details, visit https://github.com/ArtemBurakov/vault-contract
