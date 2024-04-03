const express = require('express')
const carService = require('../services/carsServices')


const router = express.Router();
//entry point = http://localhost:3000/

//GET - Get all persons
router.get('/', (req, res) => {
    const cars = carService.getAllCars();
    res.send(cars);
});

//GET - Get car by id
router.get('/:id', (req, res) => {
    const { id } = req.params
    const findCar = carService.getCarById(id)
    res.send(findCar)
});


//POST - Add a new car
router.post('/', (req, res) => {
    const newCar = req.body;
    const result = carService.AddCar(newCar);
    res.send(result);
});

//PUT - Update a car
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const obj = req.body;
    const result = carService.updateCar(id, obj);
    res.send(result);
});

// Delete a car
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const result = carService.deleteCar(id);
    res.send(result);
});



module.exports = router