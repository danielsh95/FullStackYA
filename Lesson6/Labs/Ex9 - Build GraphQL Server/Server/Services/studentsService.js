const students = [
    { id: 1, name: 'reuven', faculty: 'Computers', grades: [{ profession: 'dataBase', score: 95 }, { profession: 'logic', score: 78 }] },
    { id: 2, name: 'shimon', faculty: 'accountment', grades: [{ profession: 'calculate', score: 93 }, { profession: 'counting', score: 45 }] }
]

const getAllStudents = () => {
    return students;
}

const getStudentById = (args) => {
    const { id } = args;
    return students.find((student) => student.id == id);
}

const getStudentsByFaculty = (args) => {
    const { faculty } = args
    return students.filter(student => student.faculty == faculty);
}

const getAvarageGrades = (args) => {
    const { id } = args
    const student = students.find(student => student.id == id);
    const avarage = student.grades.reduce((x, y) => x.score + y.score) / student.grades.length
    return { avarage }
}

const addNewStudent = (args) => {
    const { student } = args;
    students.push(student)
    return 'added!'
}

const addGradeToStudent = (args) => {
    const { id, grade } = args
    const index = students.findIndex(student => student.id == id)
    if (index == -1)
        return 'Wrong id!'
    students[index].grades.push(grade);
    return 'Added a new grade!'
}

const updateStudentById = (args) => {
    const { id, name, faculty } = args;
    const index = students.findIndex(student => student.id == id)
    if (index == -1)
        return 'Wrong id!'
    students[index] = { ...students[index], ...{ name, faculty } }
    return 'updated!'
}

const deleteStudent = (args) => {
    const { id } = args
    const index = students.findIndex(student => student.id == id);
    if (index == -1)
        return 'Wrong ID!'
    students.splice(index, 1)
    return 'deleted'
}

module.exports = {
    getAllStudents, getStudentById, getStudentsByFaculty, getAvarageGrades,
    addNewStudent, addGradeToStudent, updateStudentById, deleteStudent
}