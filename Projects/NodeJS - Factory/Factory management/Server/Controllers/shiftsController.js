const express = require('express')
const shiftsService = require('../Services/shiftsService')

const router = express.Router()



router.get('/getDetails', async (req, res) => {
    const token = req.headers['x-access-token']
    const response = await shiftsService.getDetails(token)
    res.send(response)
})


router.post('/addShift', async (req, res) => {
    const shift = req.body
    const data = await shiftsService.addNewShift(shift)
    res.send(data)
})


router.post('/AllocateEmployeeToShift', async (req, res) => {
    const employeeId = req.body.employeeId
    const shiftId = req.body.shiftId
    const data = await shiftsService.AllocateEmployeeToShift(employeeId, shiftId)
    res.send(data)
})

router.put('/updateShift', async (req, res) => {
    const shiftId = req.body.shiftId
    const obj = req.body.data
    const data = await shiftsService.updateShift(shiftId, obj)
    res.send(data)
})

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