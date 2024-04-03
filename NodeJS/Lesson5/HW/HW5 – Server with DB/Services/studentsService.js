const studentRepository = require('../Repositories/studentsDb')
const gradesDb = require('../Repositories/gradesDb')

const getAllStudent = () => {
    return studentRepository.getAllStudent()
}

const getStudentById = (id) => {
    return studentRepository.getStudentById(id);
}

const getAllFaculty = async () => {
    const allStudents = await getAllStudent();
    return { "allFaculty": allStudents.map(student => student.Faculty)}
}

const getAllStudentsWithgrades = async () => {
    const allStudents = await getAllStudent();
    const allGrades = await gradesDb.getAllGrades();

    return allStudents.map(student => 
        {
            const filterGradesOfStudent = allGrades.filter(grade=> grade.StudentID == student._id)            
        return { student,
                "Grades": filterGradesOfStudent.map(grade => grade.Score)

    }})
    
}

module.exports = { getAllStudent, getStudentById, getAllFaculty , getAllStudentsWithgrades}