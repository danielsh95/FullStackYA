const express = require('express')
const shiftsService = require('../Services/shiftsService')

const router = express.Router()

router.post('/', async (req, res) => {
    const employeeId = req.body.employeeId
    const data = await shiftsService.getShiftsByEmployeesId(employeeId)
    res.send(data)
})

module.exports = router