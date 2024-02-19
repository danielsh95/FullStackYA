const jwt = require('jsonwebtoken');
const employeesDB = require('../Repositories/employeesDB')
const departmentsDB = require('../Repositories/departmentsDB')


const SECRET_KEY = process.env.SECRET_KEY;

const CheckTokenVerify = (token) => {
    return jwt.verify(token, SECRET_KEY, (err, data) => {
        if (err) {
            console.log('Error, getting a fake token');
            return false
        }

        //Here the token is verify!
        console.log('Successfully verified the token!');
        return true
    })
}

const getAllEmployees = async (token) => {
    if (CheckTokenVerify(token)) {
        const allEmployees = await employeesDB.getAllEmployees();
        const allDepartments = await departmentsDB.getAllDepartments();
        return {
            "access": true,
            "response": allEmployees.map(employee => {
                return {
                    "fullName": `${employee.firstName} ${employee.lastName}`,
                    "department": allDepartments.find(dep => dep._id == employee.departmentId.toString()).name,
                    "employeeId": employee._id
                }
            })
        }
    }

    return {
        "access": false,
        "response": "Error, Token not verify!"
    }
}

const getAllDetailsEmployee = async (token, employeeId) => {
    if (CheckTokenVerify(token)) {
        const employee = await employeesDB.getEmployee(employeeId);
        const departmentId = employee.departmentId.toString();
        console.log(employee.firstName);
        console.log(departmentId);
        const departmentName = await departmentsDB.getDepartment(departmentId)
        const allDepartmentsNames = await departmentsDB.getAllDepartments()
        return {
            "allDepartmentsNames": allDepartmentsNames.map(dep => dep.name),
            "firstName": `${employee.firstName}`,
            "lastName": `${employee.lastName}`,
            "startWorkYear": `${employee.startWorkYear}`,
            "departmentName": `${departmentName.name}`,
        }
    }

    return {
        "access": false,
        "response": "Error, Token not verify!"
    }
}

const updateEmployee = async (employee) => {
    const { employeeId, firstName, lastName, startWorkYear, departmentName } = employee
    const foundDepartment = await departmentsDB.getDepartmentByName(departmentName);

    const EmployeeToUpdate = {
        employeeId, firstName, lastName, startWorkYear, "departmentId": foundDepartment._id
    }

    await employeesDB.updateEmployee(EmployeeToUpdate)
    return 'updated'
}

module.exports = { getAllEmployees, getAllDetailsEmployee, updateEmployee }