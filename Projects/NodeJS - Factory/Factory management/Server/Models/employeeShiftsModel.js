const mongoose = require('mongoose')

const employeeShiftsSchema = mongoose.Schema(
    {
        "employeeId": String,
        "shiftId": String
    },
    {
        versionKey: false
    });

    
const employeeShiftsModel = mongoose.model('employeeShift', employeeShiftsSchema, 'employeeShifts');

module.exports = employeeShiftsModel