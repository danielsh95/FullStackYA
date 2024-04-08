import axios from "axios";


const getAllData = async (url) => {
    const {data} = await axios.get(url)
    return data;
}

export {getAllData}