const EmployeesModel = require('../Models/employeesModel')



const getAllEmployees = () => {
    return EmployeesModel.find();
}

const getEmployee = (employeeId) => {
    return EmployeesModel.findById(employeeId);
}

const updateEmployee = async (employee) => {
    return await EmployeesModel.findOneAndUpdate(
        { "_id": employee.employeeId },
        {
            "firstName": employee.firstName,
            "lastName": employee.lastName,
            "startWorkYear": employee.startWorkYear,
            "departmentId": employee.departmentId,
        }
    );
}

const deleteEmployee = async (employeeId) => {
    return await EmployeesModel.findByIdAndDelete(employeeId)
}

const deleteByDepartmentId = (departmentId) => {
    return EmployeesModel.deleteMany({ "departmentId": departmentId });
}

const addEmployee = (objEmployee) => {
    const newEmployee = new EmployeesModel(objEmployee);
    return newEmployee.save()
}

const updateDepartmentForEmployee = (employeeId, departmentId) => {
    return EmployeesModel.findOneAndUpdate(
        { "_id": employeeId },
        {
            "departmentId": departmentId
        }
    );
}

module.exports = { getAllEmployees, getEmployee, updateEmployee, deleteEmployee, addEmployee, deleteByDepartmentId, updateDepartmentForEmployee}