const EmployeesModel = require('../Models/employeesModel')


const getAllEmployees = () => {
    return EmployeesModel.find();
}

module.exports = { getAllEmployees }