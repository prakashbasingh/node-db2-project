const express = require("express");
const helmet = require("helmet");


const carsRouter = require("../cars/cars-router.js");
// const db = require("../data/connection.js")


const server = express();



server.use(express.json());
server.use(helmet());


server.use("/api/cars", carsRouter)

server.get("/", (req, res) => {
    res.status(200).json({message: "This is second week, day 2 back end project about DATABASE (db)"})
})

module.exports = server

