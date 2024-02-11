const mongoose = require('mongoose')

const employeeSchema = mongoose.Schema(
    {
        "firstName": String,
        "lastName": String,
        "startWorkYear": Number,
        "departmentId": mongoose.Types.ObjectId
    },
    {
        versionKey: false
    });

    
const employeeModel = mongoose.model('employee', employeeSchema, 'employees');

module.exports = employeeModel