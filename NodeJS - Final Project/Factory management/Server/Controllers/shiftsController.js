const express = require('express')
const shiftsService = require('../Services/shiftsService')

const router = express.Router()

router.post('/registerAndUnregister', async (req, res) => {
    const employeeId = req.body.employeeId
    const data = await shiftsService.getShiftsByEmployeesId(employeeId)
    res.send(data)
})

router.post('/registered', async (req, res) => {
    const employeeId = req.body.employeeId
    const data = await shiftsService.getAllRegisteredShifts(employeeId)
    res.send(data)
})

router.post('/signShift', async (req, res) => {
    const employeeId = req.body.employeeId
    const shiftId = req.body.shiftId    
    const data = await shiftsService.signShift(employeeId, shiftId)
    console.log(data.response);
    console.log(data);
    res.send(data)
})
module.exports = router