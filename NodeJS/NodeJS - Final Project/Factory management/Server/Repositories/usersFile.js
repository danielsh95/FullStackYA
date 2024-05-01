const jf = require('jsonfile')

const PATH = './Data/actions.json'

const getActions = () => {
    return jf.readFile(PATH);
}

module.exports = { getActions }