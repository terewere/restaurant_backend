const express = require("express");

const { saveOwnerData, getOwnerInfo } = require("../controllers/owner.controller");

const Router = express.Router();

Router.post("/save", saveOwnerData);

// Router.get("/getData", getOwnerInfo)

module.exports = { Router };