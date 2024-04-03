const EmployeeShiftsModel = require('../Models/employeeShiftsModel')
const mongoose = require('mongoose');

const getEmployeeShifts = (employeeId) => {
    return EmployeeShiftsModel.find({ employeeId: employeeId });
}

const deleteEmployeeShifts = async (employeeId) => {
    return await EmployeeShiftsModel.deleteMany({ 'employeeId': new mongoose.Types.ObjectId(employeeId) })
}

const signShift = (employeeId, shiftId) => {
    console.log(employeeId);
    console.log(shiftId);
    new EmployeeShiftsModel({ employeeId, shiftId }).save();
}

module.exports = { getEmployeeShifts, deleteEmployeeShifts, signShift }