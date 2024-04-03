const axios = require('axios')
const jsonFile = require('jsonfile')

const URLUsers = 'https://jsonplaceholder.typicode.com/users'
const URLTodo = 'https://jsonplaceholder.typicode.com/todos'

async function getUserByUsername(userName) {
    const { data: allUsers } = await axios.get(URLUsers);
    //console.log(allUsers);
    return allUsers.find(x => x.username == userName)
}

async function getTodo(userId) {
    const { data: allTodo } = await axios.get(URLTodo);
    //console.log(allTodo);
    const ourTodo = allTodo.filter(x => x.userId == userId);
    //console.log(ourTodo);
    return ourTodo;
}

const saveToJson = async (listOfTodo, userId, userName, fullName) => {
    await jsonFile.writeFile(`${userName}.json`,
        {
            "userId": userId,
            "userName": userName,
            "fullName": fullName,
            "todo": listOfTodo
        })
}


module.exports = { getUserByUsername, getTodo, saveToJson }