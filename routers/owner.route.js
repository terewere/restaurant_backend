const express = require("express");

const { ownerData } = require("../controllers/owner.controller");
const { customerData } = require("../controllers/customer.controller");

const Router = express.Router();

Router.post("/owner/save", ownerData);

Router.post("/customer/save", customerData)

module.exports = { Router };