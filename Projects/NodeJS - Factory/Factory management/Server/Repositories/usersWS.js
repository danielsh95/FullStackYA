const axios = require('axios')

const URL = 'https://jsonplaceholder.typicode.com/users'

//Get object's user by filter of userName and email
const getUser = (userName, email) => {
    return axios.get(`${URL}?username=${userName}&email=${email}`);
}

module.exports = { getUser }