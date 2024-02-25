const express = require('express')
const departmentsService = require('../Services/departmentsService')

const router = express.Router()

router.get('/getAll', async (req, res) => {
    const token = req.headers['x-access-token']
    const response = await departmentsService.getAlldepartments(token);
    res.send(response);
})


module.exports = router;