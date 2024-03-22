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

const updateDepartment = async (departmentId, name, managerId) => {
    return await DepartmentsModel.findByIdAndUpdate(
        departmentId,
        {
            "name": name,
            "Manager": managerId
        }
    );
}

const deleteDepartment = (departmentId) => {
    return DepartmentsModel.findByIdAndDelete(departmentId);
}

module.exports = { getAllDepartments, getDepartment, getDepartmentByName, updateDepartment, deleteDepartment }