const gradesDb = require('../Repositories/gradesDb')


const getAllGrades = () => {
    return gradesDb.getAllGrades();
}

const getAllProfession = async (profession) => {
    const allGrades = await gradesDb.getAllGrades();
    const allGradesWithFilter = allGrades.filter(grade => grade.Profession == profession)
    return { profession: allGradesWithFilter }
}

module.exports = { getAllGrades, getAllProfession }