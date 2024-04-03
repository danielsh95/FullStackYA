let targil2 = require('./targil2')

function funcA_Async(array)
{
    return new Promise(func => {
        setTimeout(() => {
            biggestArr = targil2.getBiggestArr(array);
            let sum = biggestArr.reduce((x,y) => x+y)
            func(sum)
        }, 2000);
    })
}

//funcA_Async(targil2.arr).then(x => console.log(x));

function funcB_Async()
{
    return new Promise(func => {  
            funcA_Async(targil2.arr).then(x => func(x));
    })
}

module.exports = {funcB_Async}