/*Data Source - Static data*/

const cars = [
    { "id": 1, "model": "bmw", "year": 2020, "color": "red" },
    { "id": 2, "model": "reno", "year": 2019, "color": "greed" },
    { "id": 3, "model": "suzuki", "year": 2018, "color": "blue" },
    { "id": 4, "model": "mazda", "year": 2017, "color": "yellow" }
]


//Get - get all cars
const getAllCars = () => {
    return cars;
}

//Get - get car by id
const getCarById = (id) => {
    const result = cars.find(car => car.id === +id)//the + say to convert id from string to number

    return result ? result : "Wrong id!";
}

//Post - Add a new car
const AddCar = (carObj) => {
    cars.push(carObj);
    return 'Added!'
}

//Put - Update a car by id
const updateCar = (id, carObj) => {
    const indexToUpdate = cars.findIndex(car => car.id == +id)
    if (indexToUpdate != -1) {
        cars[indexToUpdate] = { ...cars[indexToUpdate], ...carObj };
        return 'Updated!'
    }
    return 'Wrong ID';
}

// DELETE - Delete
const deleteCar = (id) => {
    const index = cars.findIndex((car) => car.id === +id);
    if (index !== -1) {
        cars.splice(index, 1);
        return 'Deleted!';
    }
    return 'Wrong ID';
};



module.exports = { getAllCars, getCarById, AddCar, updateCar, deleteCar }