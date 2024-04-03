const express = require('express')
const personUserService = require('../Services/personUserService')

const router = express.Router();

router.get('/', async (req, res) => {
    const data = await personUserService.getAll();
    res.send(data)
})

module.exports = router;