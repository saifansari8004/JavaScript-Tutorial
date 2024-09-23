let n = 10 //prompt("Enter a number to find the sum of natural number :")
// n = Number.parseInt(n)
let sum = 0
for(let i=0;i<n;i++)
{
    sum +=(i+1)
} 
console.log("Sum of first "+n+" number ="+sum);

//for in loop
let marks =
{
    rizwan : 23 ,
    saif : 45 ,
    rahul : 32 ,
    rakul : 65 ,
    preet : 63
}
console.log(marks)

for(let x in marks)
{
    console.log("Marks of "+x+" is "+marks[x]);
}

// for of

for(let z of "String")
{
    console.log(z);
}