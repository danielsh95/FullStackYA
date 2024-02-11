const Users = require('../Model/usersModel');

const getUsers = () => {
    return Users.find();
}

module.exports = { getUsers }