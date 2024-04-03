const Student = require('../Models/studentsModel')


const getAllStudent = () => {
    return Student.find();
}

const getStudentById = (id) => {
    return Student.findById(id)
}

module.exports = { getAllStudent, getStudentById }