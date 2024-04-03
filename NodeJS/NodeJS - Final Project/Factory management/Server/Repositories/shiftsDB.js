const shiftsModel = require('../Models/shiftsModel')

const getShiftsById = (id) => {
    return shiftsModel.findById(id);
}

const getAllShifts = () => {
    return shiftsModel.find();
}

module.exports = { getShiftsById, getAllShifts }