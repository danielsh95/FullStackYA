const jf = require('jsonfile')

const PATH = './Data/actions.json'

const getActions = () => {
    return jf.readFile(PATH);
}

const addAction = (jsonActions) => {
    jf.writeFile(PATH, jsonActions)
}

module.exports = { getActions, addAction }