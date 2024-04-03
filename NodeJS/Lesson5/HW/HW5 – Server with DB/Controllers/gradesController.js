const gradesService = require('../Services/gradesService')
const express = require('express')


const router = express.Router()


//get all grades
router.get('/', async (req, res) => {
    const grades = await gradesService.getAllGrades();
    res.send(grades);
})

//get all profession
router.get('/:profession', async (req, res) => {
    const profession = req.params.profession;
    const grades = await gradesService.getAllProfession(profession);
    res.send(grades);
})

module.exports = router