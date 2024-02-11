const Grades = require('../Models/gradesModel')


const getAllGrades = () => {
    return Grades.find();
}

module.exports = { getAllGrades }