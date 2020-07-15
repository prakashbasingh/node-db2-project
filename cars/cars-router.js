const express = require("express");

const db = require("../data/dbConnection.js");//importing connection file as db

const router = express.Router();


//************** GET **************\\

router.get("/", (req, res) => {
    
    db("cars")
        .then(cars => {
            res.status(200).json({data: cars})
        })
        .catch(error => {
            res.status(500).json({errorMessage: "failed to retrieved cars info"})
        })
})

router.get("/:id", (req, res) => {
    db("cars")
        .where({id})
        .first()
        .then(cars => {
            res.status(200).json(cars)
        })
        .catch(error => {
            res.status(500).json({errorMessage: "failed to retrieved car info with provided id"})
        })
})

//************** POST **************\\

router.post("/", (req, res) => {
    const newCarInfo = req.body;

    db("cars")
        .insert(newCarInfo, "id")
        .then(ids => {
            db("cars")
                .where({ id: ids[0] })
                .first()
                .then(carInfo => {
                    res.status(200).json(carInfo)
                })      
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({errorMessage: "failed to store new car info"})
        })
})


module.exports = router