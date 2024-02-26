const mongoose = require('mongoose')

const departmentSchema = mongoose.Schema(
    {
        "name": String,
        "Manager": mongoose.Types.ObjectId
    },
    {
        versionKey: false
    });

    
const departmentModel = mongoose.model('department', departmentSchema, 'departments');

module.exports = departmentModel