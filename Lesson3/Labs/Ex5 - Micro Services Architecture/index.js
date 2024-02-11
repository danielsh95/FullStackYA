const userService = require('./services/userService')

const userName = 'Bret'

userService.getUserDataByUserName(userName)
    .then(output => console.log(output))
    .catch(error => console.log(error));