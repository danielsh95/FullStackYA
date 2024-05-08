import axios from 'axios'


const getData = async (url) => {
    const { data } = await axios.get(url + '?_limit=3')
    return data
}

export { getData }