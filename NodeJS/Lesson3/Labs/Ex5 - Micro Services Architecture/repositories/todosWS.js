const axios = require('axios')

const URL = "https://jsonplaceholder.typicode.com/todos"

const getUserTodos = (userId, limit) => {
    return axios.get(`${URL}?userId=${userId}&_limit=${limit}`)
}

module.exports = { getUserTodos }