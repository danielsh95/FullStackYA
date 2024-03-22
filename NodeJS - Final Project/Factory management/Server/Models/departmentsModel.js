const mongoose = require('mongoose')

const departmentSchema = mongoose.Schema(
    {
        "name": String,
        "Manager": String
    },
    {
        versionKey: false
    });

    
const departmentModel = mongoose.model('department', departmentSchema, 'departments');

module.exports = departmentModel