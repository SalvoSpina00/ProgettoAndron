var express = require('express');
var router = express.Router();


//!Valid route
const asset = ["wallet","deposit","andronHistory","settings","transaction"]

//#region //!Middleware 
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

const checkValidRoute = async (req, res, next) => {
    if (!asset.includes(req.params.asset)) {
        res.status(404).json();
    }
    else{
        next();
    }
} 
//#endregion

router.get('/:asset', checkValidRoute, gatewayConnectionAndron ,async function(req, res) {
    try {
        let asset = req.params.asset

        let result= JSON.parse(Buffer.from(await contract.submitTransaction(`${asset}:getAll`)).toString())
        res.status(200).json({
            status : "success",
            message : result
        });
    } 
    catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        res.status(500).json({status: "error", message: error});
    }
    finally{
        await gateway.disconnect();
    }
});

router.get('/:asset/:id', checkValidRoute, gatewayConnectionAndron, async function(req, res) {
    try {
        let asset = req.params.asset
        let id = req.params.id

        let result=Buffer.from(await contract.submitTransaction(`${asset}:get`,id)).toString()
        res.status(result.length === 0 ? 404 : 200).json(
            result.length === 0 ? null : {
                status : "success",
                message : JSON.parse(result)
            }
        );
    } 
    catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        res.status(500).json({status: "error", message: error});
    }
    finally{
        await gateway.disconnect();
    }
});


router.get('/:asset/history/:id', checkValidRoute, gatewayConnectionAndron, async function(req, res) {
    try {
        let asset = req.params.asset
        let id = req.params.id

        let result=JSON.parse(Buffer.from(await contract.submitTransaction(`${asset}:getHistory`,id)).toString())
        res.status(result.length === 0 ? 404 : 200).json(
            result.length === 0 ? null : {
                status : "success",
                message : result
            }
        );
    } 
    catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        res.status(500).json({status: "error", message: error});
    }
    finally{
        await gateway.disconnect();
    }
});


module.exports = router;