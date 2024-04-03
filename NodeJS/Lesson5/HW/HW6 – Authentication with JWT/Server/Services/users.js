const usersDB = require('../Repositories/usersDb')
const jwt = require('jsonwebtoken')

const SECRET_KEY = "some_key"

const getTokenForLogin = async (userName, password) => {
    const user = await usersDB.getUser(userName, password)

    //console.log(user);
    if (user.length === 0) {
        console.log("ERROR, user not exist!!!")
        return "ERROR, user not exist!!!"
    }

    //Exist user:

    //create token
    const token = jwt.sign(
        { id: user._id },
        SECRET_KEY
    );

    //send token to client (this is like i buy ticket for a movie)
    return { accessToken: token, "x_id": user[0]._id }
}

module.exports = { getTokenForLogin }