const utils = require('./utils')

const userName = "Antonette"

utils.getUserByUsername(userName).then(user => {
    const {name: fullName} = user;
    const {id: userId} = user;
    if (fullName.toString().startsWith("E"))
    {

        utils.getTodo(userId).then(tasks => {
            utils.saveToJson(tasks.map(t => t.title), userId, userName, fullName);
        })
    }
});

// const todo = utils.getTodo(user.id)
// utils.saveToJson(todo)