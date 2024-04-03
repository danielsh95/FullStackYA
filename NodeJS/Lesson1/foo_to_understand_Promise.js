

//not see anything.
function PrintNameAfter3Sec1()
{
    setTimeout(()=> {
        console.log("daniel");
    },3000)
}
//PrintNameAfter3Sec1();

function PrintNameAfter3SecAsync2()
{
    new Promise(() =>{
        setTimeout(()=> {
            console.log("daniel");
        },3000)
    })
}

//we see that. because we put somthing that take time with promise.
//ניתן להסתכל על זה כמו thread נפרד
//PrintNameAfter3SecAsync2()

//now lets try with async await, and return the value to promise
function PrintNameAfter3SecAsync3()
{
    return new Promise(resolve => {
        setTimeout(() => {
        str = "daniel"
        //console.log(str);
        resolve(str); //return the value to promise
        },3000)
    });
}

async function foo()
{
    let result = await PrintNameAfter3SecAsync3();
    console.log(result)
}
foo();

console.log("1")
console.log("2")
console.log("3")
