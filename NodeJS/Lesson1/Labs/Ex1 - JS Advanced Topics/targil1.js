let arr = [ { name: 'Avi', age: 20 }, { name: 'Ron', age: 30 }, { name: 'Dana', age: 25 } ]

let ArrFilter = arr.filter(p => p.age >= 22 && p.age <= 32)

ArrFilter.map(p => console.log(p.name + ": " + p.name.length))
