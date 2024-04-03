const mongoose = require('mongoose')


const gradesSchema = mongoose.Schema({
    StudentID: String,
    Profession: String,
    Score: Number
},
    {
        versionKey: false
    }
);

const Grades = mongoose.model('grade', gradesSchema, 'grades')


module.exports = Grades