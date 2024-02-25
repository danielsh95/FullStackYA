const jwt = require('jsonwebtoken');
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

module.exports = { CheckTokenVerify, getAlldepartments }