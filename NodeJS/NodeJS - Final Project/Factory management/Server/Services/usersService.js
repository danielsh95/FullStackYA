const usersWS = require('../Repositories/usersWS')
const usersDB = require('../Repositories/usersDB')
const jwt = require('jsonwebtoken')

const SECRET_KEY = process.env.SECRET_KEY;

//Create a token for a client
const getTokenForLogin = async (userName, email) => {
    var user = undefined;
    const { data: users } = await usersWS.getUser(userName, email);

    //Check if exist user
    if (users.length === 0) {
        console.log("Error: Invalid username or email.");
        return {
            "Succeeded": false,
            "response": "Error: Invalid username or email."
        }
    }

    user = users[0]

    //Check how many actions still to user
    const userFromDb = await usersDB.getUser(user.name)

    if (userFromDb.NumOfActions === 0) {
        console.log(`Error: the number of actions today is ${userFromDb.NumOfActions}.`);
        return {
            "Succeeded": false,
            "response": `Error: the number of actions today is ${userFromDb.NumOfActions}.`
        }
    }

    //create token
    const token = jwt.sign(
        { id: user.id },
        SECRET_KEY
    );

    //Send the token and the name
    return {
        "Succeeded": true,
        "response": { accessToken: token, "name": user.name, "userId": user.id }
    }
}

module.exports = { getTokenForLogin }