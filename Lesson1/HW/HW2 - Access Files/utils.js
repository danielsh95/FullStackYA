let phonesJson = require('./phones.json')
let usersJson = require('./users.json')

function getUserDataByUserId(userId)
{
    let getPhones = phonesJson.phones.filter(phonesOfUser => phonesOfUser.userid == userId);
    listOfPhones = getPhones.flatMap(x => x.phones)

    let getUserName = usersJson.users.filter(u => u.id == userId);
    let name = getUserName.flatMap(x => x.name)
    result = "userId: " + userId + ", userName: " + name + ", phones: " + listOfPhones + " (-;";
    return result;
}


module.exports = {getUserDataByUserId}