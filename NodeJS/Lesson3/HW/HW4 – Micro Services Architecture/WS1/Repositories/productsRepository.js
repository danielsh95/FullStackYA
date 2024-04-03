const axios = require('axios')

const URL = 'http://localhost:8000/products'

const getProducts = () => {
    return axios.get(URL);
}

module.exports = { getProducts }