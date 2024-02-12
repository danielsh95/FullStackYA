const mongoose = require('mongoose')

const employeeShiftsSchema = mongoose.Schema(
    {
        "employeeId": mongoose.Types.ObjectId,
        "shiftId": mongoose.Types.ObjectId
    },
    {
        versionKey: false
    });

    
const employeeShiftsModel = mongoose.model('employeeShift', employeeShiftsSchema, 'employeeShifts');

module.exports = employeeShiftsModel