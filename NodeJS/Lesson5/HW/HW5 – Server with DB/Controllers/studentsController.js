const studentService = require('../Services/studentsService')
const express = require('express')


const router = express.Router()


//get all faculty from all student
router.get('/faculty', async (req, res) => {
    const allFaculty = await studentService.getAllFaculty();
    res.send(allFaculty);
})

//get all faculty from all student
router.get('/withgrades', async (req, res) => {
    const data = await studentService.getAllStudentsWithgrades();
    res.send(data);
})

//get all students
router.get('/', async (req, res) => {
    const students = await studentService.getAllStudent();
    res.send(students);
})

//get student by id
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const student = await studentService.getStudentById(id);
    res.send(student);
})

router.get('/*', function (req, res) {
    res.send('what???', 404);
});


module.exports = router