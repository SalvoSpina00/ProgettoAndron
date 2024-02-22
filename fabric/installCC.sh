#!/bin/bash

echo "Pulizia rete"
cd test-network
./network.sh down

echo "Creazione rete e Canale"
./network.sh up createChannel -ca

echo "Installazione CC"
./network.sh deployCC -ccn andron -ccp ../chaincode/andron -ccl typescript 

#Variabili di ambiente
export PATH=${PWD}/../bin:$PATH  
export FABRIC_CFG_PATH=$PWD/../config/
export CORE_PEER_TLS_ENABLED=true
export CORE_PEER_LOCALMSPID="Org1MSP"
export CORE_PEER_TLS_ROOTCERT_FILE=${PWD}/organizations/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt
export CORE_PEER_MSPCONFIGPATH=${PWD}/organizations/peerOrganizations/org1.example.com/users/Admin@org1.example.com/msp
export CORE_PEER_ADDRESS=localhost:7051

echo "INIT LEDGER"
peer chaincode invoke -o localhost:7050 --ordererTLSHostnameOverride orderer.example.com --tls --cafile ${PWD}/organizations/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem -C mychannel -n andron --peerAddresses localhost:7051 --tlsRootCertFiles ${PWD}/organizations/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt --peerAddresses localhost:9051 --tlsRootCertFiles ${PWD}/organizations/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/ca.crt -c '{"function":"settings:InitLedger","Args":[]}'

rm -f /Users/antoniopipitone/Desktop/AndroN/fabric/server/wallet/*
cd  /Users/antoniopipitone/Desktop/AndroN/fabric/server/src
node enrollAdmin.js && node registerUser.js
