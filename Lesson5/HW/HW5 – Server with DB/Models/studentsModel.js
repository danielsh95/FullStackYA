const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    Name: String,
    City: String,
    Faculty: String
},
    {
        versionKey: false
    }
);

const Students = mongoose.model('student', studentSchema, 'students')

module.exports = Students