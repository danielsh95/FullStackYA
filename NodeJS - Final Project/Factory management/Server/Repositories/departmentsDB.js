const DepartmentsModel = require('../Models/departmentsModel')


const getAllDepartments = () => {
    return DepartmentsModel.find();
}

module.exports = { getAllDepartments }