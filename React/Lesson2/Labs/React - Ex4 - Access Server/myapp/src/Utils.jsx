import axios from 'axios'


const getById = (url, id) => {
  return axios.get(url + id);
}

export { getById }