const jwt = require('jsonwebtoken');
const employeesDB = require('../Repositories/employeesDB')
const departmentsDB = require('../Repositories/departmentsDB')
const employeeShiftsDB = require('../Repositories/employeeShiftsDB')


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

const getAllEmployees = async (token, userId) => {
    if (CheckTokenVerify(token)) {
        const allEmployees = await employeesDB.getAllEmployees();
        const allDepartments = await departmentsDB.getAllDepartments();

        return {
            "access": true,
            "response": {
                employees: allEmployees.map(employee => {
                    return {
                        "fullName": `${employee.firstName} ${employee.lastName}`,
                        "department": allDepartments.find(dep => dep._id == employee.departmentId).name,
                        "employeeId": employee._id
                    }
                }),
                departments: ['ALL', ...allDepartments.map(dept => dept.name)]
            }
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
        employeeId, firstName, lastName, startWorkYear, "departmentId": foundDepartment._id.toString()
    }

    var result = await employeesDB.updateEmployee(EmployeeToUpdate)
    return { 'response': 'updated' }
}

const deleteEmployee = async (employeeId) => {
    employeeShiftsDB.deleteEmployeeShifts(employeeId)
    await employeesDB.deleteEmployee(employeeId)

    return { "response": 'deleted!' }
}

const addEmployee = (objEmployee) => {
    employeesDB.addEmployee(objEmployee);
    return {
        'response': 'added!'
    }
}

const registerEmployeeToDepartment = async (employeeId, departmentId) => {
    await employeesDB.updateDepartmentForEmployee(employeeId, departmentId)
    return {
        'response': 'The employee was successfully added to the department!'
    }
}

module.exports = { getAllEmployees, getAllDetailsEmployee, updateEmployee, deleteEmployee, addEmployee, registerEmployeeToDepartment }