const usersService = require('../Services/users')
const express = require('express')

const router = express.Router()


router.post('/login', async (req, res) => {
    const { userName, password } = req.body;
    const token = await usersService.getTokenForLogin(userName, password)
    res.send(token);
})

module.exports = router