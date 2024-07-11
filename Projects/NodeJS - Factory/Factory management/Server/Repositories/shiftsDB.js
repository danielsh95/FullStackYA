const shiftsModel = require('../Models/shiftsModel')

const getShiftsById = (id) => {
    return shiftsModel.findById(id);
}

const getAllShifts = () => {
    return shiftsModel.find();
}

const addNewShift = (shift) => {
    const newShift = new shiftsModel(shift);
    return newShift.save();
}

const updateShift = (shiftId, obj) => {
    return shiftsModel.findByIdAndUpdate(shiftId, obj)
}

module.exports = { getShiftsById, getAllShifts, addNewShift, updateShift }