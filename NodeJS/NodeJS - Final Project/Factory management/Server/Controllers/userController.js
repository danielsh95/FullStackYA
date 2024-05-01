const express = require('express')
const userService = require('../Services/usersService')

const router = express.Router()


router.post('/login', async (req, res) => {
    const { userName, email } = req.body;
    const response = await userService.getTokenForLogin(userName, email)
    res.send(response)
})

router.get('/GetDataUsers', async (req, res) => {
    const token = req.headers['x-access-token']
    const response = await userService.GetDataUsers(token)
    res.send(response)
})



module.exports = router;