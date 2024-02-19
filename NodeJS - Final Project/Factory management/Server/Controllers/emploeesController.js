const express = require('express')
const employeesService = require('../Services/employeesService')

const router = express.Router()

router.get('/', async (req, res) => {
    const token = req.headers['x-access-token']
    const data = await employeesService.getAllEmployees(token)
    res.send(data)
})

//get details employee
router.get('/employeeId/:id', async (req, res) => {
    const employeeId = req.params.id;
    const token = req.headers['x-access-token']
    const detailsEmployee = await employeesService.getAllDetailsEmployee(token, employeeId);
    res.send(detailsEmployee);
})

router.post('/updateEmployee', async (req, res) => {
    const Employee = req.body;
    const response = await employeesService.updateEmployee(Employee)
    res.send(response)
})

module.exports = router