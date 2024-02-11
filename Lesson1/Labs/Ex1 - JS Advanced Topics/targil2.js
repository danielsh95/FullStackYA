let arr = [ [1, 6, 3, 9], [6, 21, 5, 18], [4, 11, 23, 1] ]


//Get from all arrays who biggest array , and return the array.
function getBiggestArr(array)
{
    let biggestArr = null;
    let checkBiggest = 0;
    array.forEach(innerArr => {
        result = innerArr.reduce((x,y) => x + y)
        if(result > checkBiggest)
        {
            checkBiggest = result
            biggestArr = innerArr;
        }
    });

    return biggestArr;
}


let biggestArr = getBiggestArr(arr);

//print in biggest arr just numbers that they between 15 to 25
//biggestArr.filter(x => x > 15 && x < 25).map(x => console.log(x))



//this is for exercise 4:
module.exports = {getBiggestArr, arr}