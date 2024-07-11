const express = require('express')
const employeesService = require('../Services/employeesService')
const usersService = require('../Services/usersService')

const router = express.Router()

router.get('/', async (req, res) => {

    const token = req.headers['x-access-token']
    const userId = req.headers['userid']
    await usersService.addAction(userId)
    const data = await employeesService.getAllEmployees(token, userId)
    res.send(data)
})

//get details employee
router.get('/employeeId/:id', async (req, res) => {
    const employeeId = req.params.id;
    const token = req.headers['x-access-token']
    const userId = req.headers['userid']
    await usersService.addAction(userId)
    const detailsEmployee = await employeesService.getAllDetailsEmployee(token, employeeId);
    res.send(detailsEmployee);
})

router.put('/updateEmployee', async (req, res) => {
    const Employee = req.body;
    const response = await employeesService.updateEmployee(Employee)
    res.send(response)
})

router.delete('/deleteEmployee', async (req, res) => {
    const employeeId = req.body.employeeId;
    const response = await employeesService.deleteEmployee(employeeId)
    res.send(response)
})

router.post('/NewEmployee', async (req, res) => {
    const objEmployee = req.body;
    const response = await employeesService.addEmployee(objEmployee)
    res.send(response)
})

router.post('/registerEmployeeToDepartment', async (req, res) => {
    const departmentId = req.body.departmentId;
    const employeeId = req.body.employeeId;
    const response = await employeesService.registerEmployeeToDepartment(employeeId, departmentId)
    res.send(response)
})


module.exports = router