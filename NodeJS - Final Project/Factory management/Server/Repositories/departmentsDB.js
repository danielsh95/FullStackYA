const DepartmentsModel = require('../Models/departmentsModel')


const getAllDepartments = () => {
    return DepartmentsModel.find();
}

const getDepartment = (departmentId) => {
    return DepartmentsModel.findById(departmentId);
}

const getDepartmentByName = (departmentName) => {
    return DepartmentsModel.findOne({ 'name': departmentName });
}

module.exports = { getAllDepartments, getDepartment, getDepartmentByName }