const personFile = require('../Repositories/personsFile')
const usersDb = require('../Repositories/usersDb')
const usersWS = require('../Repositories/usersWS')

const getAll = async () => {
    try {
        const { data: usersFromWS } = await usersWS.getUsers();
        const usersFromDb = await usersDb.getUsers();
        const { persons } = await personFile.getPersons();
        return usersFromWS.map(user => {
            const userFromDb = usersFromDb.find(userDb => userDb.externalId == +user.id)
            const person = persons.find(p => p.id == user.id)
            return {
                "id": user.id,
                "name": user.name,
                "email": user.email,
                "phone": person? person.phone : {},
                "address":userFromDb? {
                    "city": userFromDb.city,
                    "Country": userFromDb.country
                }: {}
            }
        })
    } catch (error) {
        console.log(error);
        return error
    }
}

module.exports = { getAll }