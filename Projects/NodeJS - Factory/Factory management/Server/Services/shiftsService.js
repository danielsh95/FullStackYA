const shiftsDB = require('../Repositories/shiftsDB')
const employeeShiftsDB = require('../Repositories/employeeShiftsDB')
const employeesDB = require('../Repositories/employeesDB')
const jwt = require('jsonwebtoken');

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

const AllocateEmployeeToShift = (employeeId, shiftId) => {
    employeeShiftsDB.signShift(employeeId, shiftId)

    return {
        'response': 'The employee allocated!'
    }
}

const addNewShift = async (shift) => {
    const startingHour = parseInt(shift.startingHour.split(':')[0])
    const endingHour = parseInt(shift.endingHour.split(':')[0])
    const newShift = { ...shift, 'startingHour': startingHour, 'endingHour': endingHour }

    await shiftsDB.addNewShift(newShift);

    return {
        'response': 'added!'
    }
}

const updateShift = async (shiftId, obj) => {
    const startingHour = parseInt(obj.startingHour.split(':')[0])
    const endingHour = parseInt(obj.endingHour.split(':')[0])
    const shiftToUpdate = { ...obj, 'startingHour': startingHour, 'endingHour': endingHour }

    const result = await shiftsDB.updateShift(shiftId, shiftToUpdate);
    if (Object.keys(result).length > 0) {

        return { 'response': 'update succedd!' }
    }
    else return { 'response': 'Error, worng somthing!!!' }

}

const getShiftsByEmployeesId = async (employeeId) => {
    const registeredShifts = await getAllRegisteredShifts(employeeId);
    const unregisteredShifts = await getAllUnregisteredShifts(employeeId);
    return {
        registeredShifts,
        unregisteredShifts
    }
}

const getAllRegisteredShifts = async (employeeId) => {
    const ids_employeeShifts = await employeeShiftsDB.getEmployeeShifts(employeeId)
    const allShifts = await shiftsDB.getAllShifts()

    // הצג את ה ids של המשמרות שבהן אתה מעוניין
    const desiredShiftIds = ids_employeeShifts.map(shift => shift.shiftId.toString());
    // סנן את ה allShifts לפי המשמרות שתואמות ל ids_employeeShifts
    const registeredShifts = allShifts.filter(shift => desiredShiftIds.includes(shift._id.toString()));

    return registeredShifts
}

const getAllUnregisteredShifts = async (employeeId) => {
    const ids_employeeShifts = await employeeShiftsDB.getEmployeeShifts(employeeId)
    const allShifts = await shiftsDB.getAllShifts()

    const desiredShiftIds = ids_employeeShifts.map(shift => shift.shiftId.toString());
    const unregisteredShifts = allShifts.filter(shift => !(desiredShiftIds.includes(shift._id.toString())))

    return unregisteredShifts
}

const signShift = (employeeId, shiftId) => {
    employeeShiftsDB.signShift(employeeId, shiftId);
    return {
        "response": "sign succsed!"
    }
}

const getDetails = async (token) => {
    const result = CheckTokenVerify(token)
    if (result) {
        const allShifts = await shiftsDB.getAllShifts();
        const allEmployees = await employeesDB.getAllEmployees();

        return {
            'access': true,
            "response": {
                'shifts': allShifts,
                'employees': allEmployees
            }
        }
    }
    return {
        'access': false,
        "response": 'Error, inValid token!'
    }
}


module.exports = { getShiftsByEmployeesId, signShift, getAllRegisteredShifts, getDetails, addNewShift, updateShift, AllocateEmployeeToShift }