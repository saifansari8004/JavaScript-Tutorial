// Variable let , var , const

// let is latest used to store data of any type;
// var is used before ES6
// var is globally scoped
// let and const are blocked scoped
// const is use for constant value - cannot be updated and re-decalred
// const should be initiated at the time of declaration

var a = 10;
let b = "saif"
// var c = true
// var c = 342

const pi = 3.14 // cannot be upadted
// pi = 098 //not allowed

let c = null
let d  = undefined 

console.log(b)
console.log(c)
{
    let b  = "ansari"
    console.log(b)
}
console.log(b)


// Note : Always try to use const
// whenever you think if there is change in variable make it let