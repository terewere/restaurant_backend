const express = require("express");

const { saveOwnerData } = require("../controllers/owner.controller");

const Router = express.Router();

Router.post("/save", saveOwnerData);

module.exports = { Router };