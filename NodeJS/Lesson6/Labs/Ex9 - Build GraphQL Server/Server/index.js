const express = require('express')
const cors = require('cors')
const { buildSchema } = require('graphql')
const { graphqlHTTP } = require('express-graphql')
const studentsService = require('./Services/studentsService')


const schema = buildSchema(`
    
    type Grade{
        profession: String
        score: Int
    }

    type Student{
        id: Int
        name: String
        faculty: String
        grades: [Grade]
    }

    type GradeAvarage{
        avarage: String
    }

    input StudentInput{
        id: Int
        name: String
        faculty: String
        grades: [GradeInput]
    }

    input GradeInput{
        profession: String
        score: Int
    }

    type Query{
        getAllStudents: [Student]
        getStudent(id: Int): Student
        getStudentsByFaculty(faculty: String): [Student]
        getAvarageGrades(id: Int): GradeAvarage
    }

    type Mutation {
        addNewStudent(student: StudentInput): String
        addGradeToStudent(id:Int, grade: GradeInput): String
        updateStudentById(id:Int, name: String, faculty: String): String
        deleteStudent(id: Int): String
    }
`)

const root = {
    getAllStudents: studentsService.getAllStudents,
    getStudent: studentsService.getStudentById,
    getStudentsByFaculty: studentsService.getStudentsByFaculty,
    getAvarageGrades: studentsService.getAvarageGrades,
    addNewStudent: studentsService.addNewStudent,
    addGradeToStudent: studentsService.addGradeToStudent,
    updateStudentById: studentsService.updateStudentById,
    deleteStudent: studentsService.deleteStudent
}



const app = express()
const PORT = 3000


app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
}))

app.listen(PORT, () => {
    console.log(`App is listening at http://localhost:${PORT}`);
})

