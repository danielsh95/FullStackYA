const UserModel = require('../Models/UserModel')


const getUser = (_userName, _password) => {
    return UserModel.find({ userName: _userName, password: _password });
}

module.exports = { getUser }