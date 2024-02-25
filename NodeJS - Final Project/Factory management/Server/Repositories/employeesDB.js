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

const deleteEmployee = (employeeId) => {
    return EmployeesModel.findOneAndDelete(employeeId)
}

const addEmployee = (objEmployee) => {
    console.log(objEmployee);
    const newEmployee = new EmployeesModel(objEmployee);
    return newEmployee.save()
}

module.exports = { getAllEmployees, getEmployee, updateEmployee, deleteEmployee, addEmployee }