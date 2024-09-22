// NN SS BB U
// null number   string symbol    bigint boolean  undefined

console.log("Types of datatypes -- Primitive and Non-Primitive")
console.log("1. Primitive datatypes - NN SS BB U")


let a = null;
console.log(typeof(a))
let b = 123;
console.log(typeof(b))
let c = "Saif"
console.log(typeof(c))
let d = Symbol("This is Symbol")
console.log(typeof(d))
let e = true  // and false
console.log(typeof(e))
let f = BigInt(765) + BigInt(5)
console.log(typeof(f))
let g = undefined  // if we dont initialize variable it set as undefined bydefault
console.log(typeof(g))    
console.log(a , b , c , d , e , f , g)


console.log("2. Non-primitive datatypes - Objects")

const obj = 
{
    "Saif" : true ,
    "Farhan" : false ,
    "Areeb" : "Present" ,
    "Anas" : undefined
}

console.log(obj);
console.log(obj.Saif);
console.log(typeof(obj.Areeb));
console.log(obj["Farhan"]);
