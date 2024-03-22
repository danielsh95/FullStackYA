const express = require('express')
const departmentsService = require('../Services/departmentsService')

const router = express.Router()

router.get('/getAll', async (req, res) => {
    const token = req.headers['x-access-token']
    const response = await departmentsService.getAlldepartments(token);
    res.send(response);
})
router.get('/detailsDepartment/:name', async (req, res) => {
    const token = req.headers['x-access-token']
    const departmentName = req.params.name
    const response = await departmentsService.getDetailsEditDepartments(token, departmentName);
    console.log(response);
    res.send(response);
})

router.put('/update', async (req, res) => {
    const name = req.body.name;
    const managerId = req.body.managerId;
    const departmentId = req.body.departmentId;
    console.log(name);
    const response = await departmentsService.updateDepartment(departmentId, name, managerId);
    res.send(response);
})

router.delete('/delete', async (req, res) => {
    const departmentId = req.body.departmentId
    const response = await departmentsService.deleteDepartment(departmentId);
    res.send(response);
})

module.exports = router;