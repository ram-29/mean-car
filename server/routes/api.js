const express = require('express');
const api = express.Router();

const Car = require('../models/car');

//Retrieve
api.get('/cars', (req, res) => {
    Car.find((err, cars) => {
        res.json(cars);
    });
});

//Add
api.post('/car/add', (req, res)=>{
    let car = new Car();
    car.name = req.body.name;
    car.model = req.body.model;
    car.brand = req.body.brand;
    car.description = req.body.description;
    car.price = req.body.price;

    car.save((err) => {
        if(err){
            res.json({msg:err});
        }else{
            res.json({msg:'Car added successfully.'});
        }
    })
});

//Delete
api.delete('/car/:id', (req, res) => {
    Car.remove({ _id: req.params.id}, (err) => {
        if(err){
            res.json({msg:err});
        }else{
            res.json({msg:'Car deleted successfully.'});
        }
    })
});

module.exports = api;