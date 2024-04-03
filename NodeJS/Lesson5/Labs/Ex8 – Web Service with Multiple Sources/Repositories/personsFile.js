const jf = require('jsonfile')

const getPersons = () => {
    return jf.readFile('./Data/persons.json')
}

module.exports = { getPersons }