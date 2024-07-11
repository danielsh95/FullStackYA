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
    if (usersById.length > 0) {
        const lastAction = usersById[usersById.length - 1]
        const today = new Date().toLocaleDateString('he-IL').replace(/\./g, '/');
        if (lastAction.date == today) {
            return lastAction.actionAllowd
        }
    }
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
                            'currentActionAllowed': actionsAllowd != undefined ? actionsAllowd : user.NumOfActions
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

const CheckAction = async (userId) => {
    const usersActions = await usersFile.getActions()
    const listOfTheSameUser = usersActions.actions.filter(user => user.id == userId)

    //if don't exist any id like userId in a json
    if (listOfTheSameUser.length == 0)
        return { 'response': true }

    //here exist the same Id:

    const detailsUser = listOfTheSameUser[listOfTheSameUser.length - 1]
    if (detailsUser.actionAllowd > 0)
        return { 'response': true }

    const today = new Date().toLocaleDateString('he-IL').replace(/\./g, '/');
    if (detailsUser.date != today)
        return { 'response': true }

    return { 'response': false }
}

const addAction = async (userId) => {
    const jsonActions = await usersFile.getActions()

    const usersWithTheSameId = jsonActions.actions.filter(action => action.id == userId)
    const today = new Date().toLocaleDateString('he-IL').replace(/\./g, '/');
    console.log('I am here!1 - ' + usersWithTheSameId.length);
    if (usersWithTheSameId.length > 0) {
        const lastUserAction = usersWithTheSameId[usersWithTheSameId.length - 1]
        if (lastUserAction.date == today) {

            const newAction = {
                "id": +userId,
                "maxActions": lastUserAction.maxActions,
                "date": lastUserAction.date,
                "actionAllowd": lastUserAction.actionAllowd - 1
            }
            usersFile.addAction({ 'actions': [...jsonActions.actions, newAction] })

            return
        }

    }

    //not exist action with the same userId OR the date is not today: 
    const user = await usersDB.getUserByUserId(userId)
    console.log('I am here!2');
    const newAction = {
        "id": +userId,
        "maxActions": user.NumOfActions,
        "date": today,
        "actionAllowd": user.NumOfActions - 1
    }

    usersFile.addAction({ 'actions': [...jsonActions.actions, newAction] })
}

module.exports = { getTokenForLogin, GetDataUsers, CheckAction, addAction }