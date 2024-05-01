const usersWS = require('../Repositories/usersWS')
const usersDB = require('../Repositories/usersDB')
const usersFile = require('../Repositories/usersFile')
const jwt = require('jsonwebtoken')

const SECRET_KEY = process.env.SECRET_KEY;

const CheckTokenVerify = (token) => {
    return jwt.verify(token, SECRET_KEY, (err, data) => {
        if (err) {
            console.log('Error, getting a fake token');
            return false
        }

        //Here the token is verify!
        console.log('Successfully verified the token!');
        return true
    })
}


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

const getActionsAllowdByUserId = (userId, allUsersActions) => {
    usersById = allUsersActions.actions.filter(user => user.id == userId)
    if (usersById.length > 0)
        return usersById[usersById.length - 1].actionAllowd
}

const GetDataUsers = async (token) => {
    if (CheckTokenVerify(token)) {
        const AllUsersActions = await usersDB.getAllUsers()
        const AllUsersActionsAllowd = await usersFile.getActions()

        return {
            'access': true,
            "response": {
                'users':
                    AllUsersActions.map(user => {
                        actionsAllowd = getActionsAllowdByUserId(user.UserId, AllUsersActionsAllowd)
                        return {
                            'fullName': user.FullName,
                            'maxActions': user.NumOfActions,
                            'currentActionAllowed': actionsAllowd ? actionsAllowd : user.NumOfActions
                        }
                    })


                //{ 'fullName': 'john', 'maxActions': 20, 'currentActionAllowed': 10 }]
            }
        }
    }
    return {
        'access': false,
        "response": 'Error, inValid token!'
    }
}


module.exports = { getTokenForLogin, GetDataUsers }