const express = require('express')
const userService = require('../Services/usersService')

const router = express.Router()


router.post('/login', async (req, res) => {
    const { userName, email } = req.body;
    const response = await userService.getTokenForLogin(userName, email)
    res.send(response)
})

module.exports = { router };