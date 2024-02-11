let arrUtils = require('./strUtils')

function getArrLength(arrStrings)
{
    let total = 0;
    arrStrings.forEach(str => {
        total += arrUtils.getLength(str);
    });
    return total;
}


module.exports = {getArrLength}