## Create a Subaccount

```
near create-account ${SUBACCOUNT_ID}.${ACCOUNT_ID} --masterAccount ${ACCOUNT_ID} --initialBalance ${INITIAL_BALANCE}
```
Ex: near create-account mycontract.myaccount.testnet --masterAccount myaccount.testnet --initialBalance 5

## Compile the Contract

In the root directory
```
yarn asb
```

## Deploy the Contract

```
near deploy --accountId=${ACCOUNT_ID} --wasmFile=${PATH_TO_WASM}
```
Ex: near deploy --accountId=mycontract.myaccount.testnet --wasmFile=build/release/near-marketplace-contract.wasm

## Calling a View Function(To read from SC)

```
near view ${CONTRACT_ACCOUNT_ID} ${METHOD_NAME} ${PAYLOAD}
```
Ex: near view mycontract.myaccount.testnet getProduct '{"id": "0"}'

## Calling a Change Function(to write to blockchain)

```
near call ${CONTRACT_ACCOUNT_ID} ${METHOD_NAME} ${PAYLOAD} --accountId=${ACCOUNT_ID}
```
Ex: near call mycontract.myaccount.testnet setProduct '{"id": "0", "productName": "tea"}' --accountId=myaccount.testnet

