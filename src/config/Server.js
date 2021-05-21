require("dotenv").config({ path: ".env" });
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const route = require("../route");

class Server {

    constructor() {

        this.app = express();
        this.setupMiddleware();
        this.app.use(route);

    }

    setupMiddleware(){

        this.app.use(cors());
        this.app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
        this.app.use(bodyParser.json({ limit: "50mb" }));

        this.app.use(async (req, res, next) => {

            res.setHeader("Access-Control-Allow-Origin" , "*");
            res.setHeader("Access-Control-Allow-Methods" , "POST, PUT, GET, DELETE");
            res.setHeader("Access-Control-Allow-Headers" , "Content-Type");
            res.setHeader("Access-Control-Allow-Credentials" , true);
            
            next();
        
        });

    }

}

module.exports = new Server();