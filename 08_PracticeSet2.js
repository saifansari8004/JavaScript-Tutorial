// Chapter 2 -- Practice Set 2

console.log("Chapter - 2 Practice Set");

console.log("Ques-1: Use logical operators to find whether the age of a person lies between 10 and 20?");
console.log("Ques-2: Demonstrate the use in JavaScript of switch case statements.");
console.log("Ques-3: Write a Java Script program to find whether a number is Divisible by 2 and 3. ");
console.log("Ques-4 : Write a JavaScript program to find whether a number is Divisible by either 2 or 3. ");
console.log("Ques-5 : Print  You can Drive or  You cannot Drive based on age being greater than 18 using ternary operator.");
// Ques - 1
let num = 20
if(num>10 && num<20)
{
    console.log("Number is in between 10 and 20");
}
else
{
    console.log("Number is not in between 10 and 20");
}

// Ques - 2
let a = "Hello"
switch(a)
{
    case "Hi" :
        console.log("Says Hi");
        break
    
    case "Hey" :
        console.log("Says Hey");
        break

    case "Hello" :
        console.log("Says Hello");
        break

    case "Holla" :
        console.log("Says Holla");
        break

    default :
        console.log("Says Nothing");
}


//Ques - 3
let x = 12
if(x%2==0 && x%3==0)
{
    console.log("Number is divisible by 2 and 3");
}
else
{
    console.log("Number is not divisible by 2 and 3");
}
    

// Ques - 4
x = 13
if(x%2==0 || x%3==0)
{
    console.log("Number is divisible by 2 or 3");
}
else
{
   console.log("Number is not divisible by 2 or 3");
}

// Ques - 5
let age = 32
console.log(age>18 ? "You can drive" : "You cant drive");