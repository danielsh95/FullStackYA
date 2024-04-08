import axios from 'axios'

const URL_USER = 'https://jsonplaceholder.typicode.com/users/'

const getData = async (userId) => {
    const { data } = await axios.get(URL_USER + userId)
    return data
}

const updateUser = async (userId, obj) => {
    const { data } = await axios.put(URL_USER + userId, obj)
    return data
}

export { getData, updateUser }