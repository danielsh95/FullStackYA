//const jFile = require('jsonfile')
const personsJson = require('./persons.json')


function getPersonByStreet(streetName)
{
    return new Promise(func => {
        setTimeout(() => {
            let namePerson = personsJson.filter(p => p.address.street.name == streetName);
            func(namePerson);
        },2000)});
}

getPersonByStreet("Yafo").then(l => l.map(p => console.log(p.name)));