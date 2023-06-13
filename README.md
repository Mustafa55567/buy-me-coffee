# buy-me-coffee
This Buy Me a Coffee site project is a platform that allows users to support content creators by making small monetary contributions.This is just an implementation on the test network
In order to run this project 
cd client
npm i
npm run dev
Make sure if you want to deploy your own smart contract follow the given below steps.
Edit config file by putting your own private key and alchemy url.
Then deploy it by the following commands
cd Smart_Contract
npm i 
npx hardhat compile
npx hardhat run scripts/deploy.ts --network goerli(Or whatever be it is)
