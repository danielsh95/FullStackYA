const axios = require('axios')

const URL = 'https://jsonplaceholder.typicode.com/users'

const getUsers = () => {
    return axios.get(URL)
}

module.exports = { getUsers }