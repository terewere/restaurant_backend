const express = require("express");

const helmet = require("helmet");

const cors = require("cors");

const morgan = require("morgan");

const { dbConnection } = require("./database");

const { Router } = require("../routers/owner.route");

const Port = process.env.Port || 8000;

const app = express();

app.use(express.urlencoded({ extended: true })); //access to the form data

app.use(express.json()); //req.body

app.use(helmet());

app.use(cors());

app.use(morgan("combined"));

app.use(Router);

app.listen(Port, () => {

    dbConnection();

    console.log(`server listening on: ${Port}`);
    
})