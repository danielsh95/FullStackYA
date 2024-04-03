const mongoose = require('mongoose')

const employeeSchema = mongoose.Schema(
    {
        "firstName": String,
        "lastName": String,
        "startWorkYear": Number,
        "departmentId": String
    },
    {
        versionKey: false
    });

    
const employeeModel = mongoose.model('employee', employeeSchema, 'employees');

module.exports = employeeModel