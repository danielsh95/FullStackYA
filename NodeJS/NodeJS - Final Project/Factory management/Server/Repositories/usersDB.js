const usersModel = require('../Models/usersModel')

const getUser = (fullName) => {
    return usersModel.findOne({ "FullName": fullName })
}
const getAllUsers = () => {
    return usersModel.find()
}

module.exports = { getUser, getAllUsers }