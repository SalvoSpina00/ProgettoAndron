const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Setting for Hyperledger Fabric
const { Wallets, Gateway } = require('fabric-network');
const fs = require('fs');
const path = require('path');

//Route Files
const getter = require("./routes/getter")

const wallet = require("./routes/wallet")
const transaction = require("./routes/transaction")
const settings = require("./routes/settings")
const deposit = require("./routes/deposit")
const history = require("./routes/andronHistory")


//Routes

app.use("/wallet", wallet);
app.use("/transaction", transaction);
app.use("/setting", settings);
app.use("/deposit", deposit);
app.use("/andronHistory", history);

app.use("/", getter);




app.listen(8080, async () => {
    // Create a new file system based wallet for managing identities.
    const ccpPath = path.resolve(__dirname, '..',"test-network", "organizations", "peerOrganizations", "org1.example.com", 'connection-org1.json');
    global.ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));

    const walletPath = path.join(process.cwd(),'wallet');
    global.wallet = await Wallets.newFileSystemWallet(walletPath);

    // Check to see if we've already enrolled the user.
    global.identity = await wallet.get('appUser');
    if (!identity) {
    console.log('An identity for the user "appUser" does not exist in the wallet');
    console.log('Run the registerUser.ts application before retrying');
    return;
    }

    // Create a new gateway for connecting to our peer node.
    global.gateway = new Gateway();

    console.log("API running on http://localhost:8080")
})

