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
        "access": true,
        "response": "Error, Token not verify!"
    }
}

module.exports = { getAllEmployees }