const shiftsDB = require('../Repositories/shiftsDB')
const employeeShiftsDB = require('../Repositories/employeeShiftsDB')

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

module.exports = { getShiftsByEmployeesId, signShift, getAllRegisteredShifts }