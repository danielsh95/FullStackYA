const EmployeeShiftsModel = require('../Models/employeeShiftsModel')

const getEmployeeShifts = (employeeId) => {
    return EmployeeShiftsModel.find({ employeeId: employeeId });
}

module.exports = { getEmployeeShifts }