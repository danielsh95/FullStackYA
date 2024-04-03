const jf = require('jsonfile')

const PATH = "./Data/orders.json"

const getOrders = () => {
    return jf.readFile(PATH);
}

module.exports = { getOrders }