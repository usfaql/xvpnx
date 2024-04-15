const express = require("express");
const {getApi} = require("../controllers/Vpn");
const vpnRouter = express.Router();


vpnRouter.get("/android", getApi);
module.exports = vpnRouter;