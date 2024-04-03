const jwt = require('jsonwebtoken');
const departmentsDB = require('../Repositories/departmentsDB')
const employeesDB = require('../Repositories/employeesDB')

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

const getAlldepartments = async (token) => {
    const result = CheckTokenVerify(token)
    if (result) {
        const allDepartments = await departmentsDB.getAllDepartments();
        return {
            'access': true,
            "response": allDepartments
        }
    }
    return {
        'access': false,
        "response": 'Error, inValid token!'
    }
}

const getDetailsEditDepartments = async (token, departmentName) => {
    const result = CheckTokenVerify(token)
    if (result) {
        const ourDepartment = await departmentsDB.getDepartmentByName(departmentName);
        const allEmployees = await employeesDB.getAllEmployees();
        return {
            'access': true,
            "response": {
                'departmentId': ourDepartment._id,
                'manager': allEmployees.find(employee => employee._id.toString() == ourDepartment.Manager),
                'allEmployees': allEmployees,
                'UnregisteredEmployee': allEmployees.filter(employee => employee.departmentId != ourDepartment._id.toString())
            }
        }
    }
    return {
        'access': false,
        "response": 'Error, inValid token!'
    }
}

const updateDepartment = async (departmentId, name, managerId) => {
    await departmentsDB.updateDepartment(departmentId, name, managerId);
    return {
        'response': 'Updated!'
    }
}

const deleteDepartment = async (departmentId) => {

    //Delete all employees belongs to that department
    const response = await employeesDB.deleteByDepartmentId(departmentId)

    //Delete department
    await departmentsDB.deleteDepartment(departmentId)

    if (response.deletedCount == 0)
        return { 'isSucceed': false, 'response': `Note, dont have any employees that belong to department!` }
    else
        return { 'isSucceed': true, 'response': 'Deleted!' }
}


module.exports = { CheckTokenVerify, getAlldepartments, getDetailsEditDepartments, updateDepartment, deleteDepartment }