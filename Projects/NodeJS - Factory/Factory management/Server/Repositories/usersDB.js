const usersModel = require('../Models/usersModel')

const getUser = (fullName) => {
    return usersModel.findOne({ "FullName": fullName })
}

function getUserByUserId(userId) {
    return usersModel.findOne({ "UserId": userId })
}

const getAllUsers = () => {
    return usersModel.find()
}

module.exports = { getUser, getAllUsers, getUserByUserId }