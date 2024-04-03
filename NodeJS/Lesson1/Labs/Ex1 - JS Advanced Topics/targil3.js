let arr = [1, 2 ,3 ,4 ,5 ,6]

function getAvarage(array)
{
    const prom = new Promise(funct => {
        setTimeout(() => {            
            let avarage = array.reduce((x,y) => x+y) / array.length;
            funct(avarage)
        },1000)
    });
    return prom;
}
getAvarage(arr).then(myAvarage => console.log(myAvarage));