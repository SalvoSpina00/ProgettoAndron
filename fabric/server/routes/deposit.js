var express = require('express');
var router = express.Router();


//#region  //!Middleware
const gatewayConnectionAndron  = async (req, res, next) => {    
    try{
        await gateway.connect(ccp, { wallet, identity: 'appUser', discovery: { enabled: true, asLocalhost: true } });
        const network = await gateway.getNetwork('mychannel'); // Get the network (channel) our contract is deployed to.
        global.contract = network.getContract('andron'); // Get the contract from the network.
        next();
    }
    catch(error){
        console.log(error)
        await gateway.disconnect();
        res.status(500).json()
    }
} 

//#endregion

router.post('/', gatewayConnectionAndron, async (req, res) => {
    try {
        let result=JSON.parse(Buffer.from(await contract.submitTransaction(`deposit:deposit`,JSON.stringify(req.body))).toString())
        res.status(result.status==="error" ? 400 : 200).json(result);
    } 
    catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        res.status(500).json({status: "error", message: error});
    }
    finally{
        await gateway.disconnect();
    }
})

router.put('/:id', gatewayConnectionAndron, async (req, res) => {
    try {
        let result=JSON.parse(Buffer.from(await contract.submitTransaction(`deposit:withdrawal`, req.params.id ,JSON.stringify(req.body))).toString())
        res.status(result.status==="error" ? 400 : 200).json(result);
    } 
    catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        res.status(500).json({status: "error", message: error});
    }
    finally{
        await gateway.disconnect();
    }
})

module.exports = router;