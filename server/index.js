const express = require("express");

const helmet = require("helmet");

const cors = require("cors");

const morgan = require("morgan");

const app = express();

const { dbConnection } = require("./database");

const Port = process.env.Port || 8000;

app.use(express.urlencoded({ extended: false })); //access to the form data

app.use(express.json()); //req.body

app.use(helmet());

app.use(cors());

app.use(morgan("combined"));

app.listen(Port, () => {

    dbConnection();

    console.log(`server listening on: ${Port}`);
    
})