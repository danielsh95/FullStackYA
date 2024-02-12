const express = require('express')
const employeesService = require('../Services/employeesService')

const router = express.Router()

router.get('/', async (req, res) => {
    const token = req.headers['x-access-token']
    const data = await employeesService.getAllEmployees(token)
    res.send(data)
})

module.exports = router