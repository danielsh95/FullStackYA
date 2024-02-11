const usersModel = require('../Models/usersModel')

const getUser = (fullName) => {
    return usersModel.findOne({ "FullName": fullName })
}

module.exports = { getUser }