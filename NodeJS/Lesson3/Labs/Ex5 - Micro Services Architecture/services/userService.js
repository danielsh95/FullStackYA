const userFile = require('../repositories/usersFile')
const usersWS = require('../repositories/usersWS')
const todosWS = require('../repositories/todosWS')

const getUserDataByUserName = async (userName) => {
    const userData = {};

    //name & emails
    const { data: users } = await usersWS.getUserByUserName(userName);
    const name = users[0].name;
    const email = users[0].email;
    const userId = users[0].id;
    userData.name = name;
    userData.email = email;

    //10 Title from todos
    const { data: todos } = await todosWS.getUserTodos(userId, 10);
    userData.todosTitles = todos.map(t => t.title);

    //phones
    const usersFromJsonFile = await userFile.getAllUsers();
    const phones = usersFromJsonFile.users.find(u => u.username == userName).phones;
    userData.phones = phones;

    return userData;
}


module.exports = {getUserDataByUserName}