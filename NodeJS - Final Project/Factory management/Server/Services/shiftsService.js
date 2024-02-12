const shiftsDB = require('../Repositories/shiftsDB')
const employeeShiftsDB = require('../Repositories/employeeShiftsDB')

const getShiftsByEmployeesId = async (id) => {
    const ids_employeeShifts = await employeeShiftsDB.getEmployeeShifts(id)
    const allShifts = await shiftsDB.getAllShifts()

    // הצג את ה ids של המשמרות שבהן אתה מעוניין
    const desiredShiftIds = ids_employeeShifts.map(shift => shift.shiftId.toString());
    // סנן את ה allShifts לפי המשמרות שתואמות ל ids_employeeShifts
    const matchingShifts = allShifts.filter(shift => desiredShiftIds.includes(shift._id.toString()));

    return matchingShifts
}

module.exports = { getShiftsByEmployeesId }