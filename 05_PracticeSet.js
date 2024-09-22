// Chapter 1 -- Practice Set 1

console.log("Chapter - 1 Practice Set");

console.log("Ques-1: Create a variable of type string and try to add a number to it.");
console.log("Ques-2: Use type of operator to find the data type of the string in last question.");
console.log("Ques-3: create a const object in JavaScript can you change it to hold a number later? ");
console.log("Ques-4 : Try to add a new key to the cost object in problem 3. were you able to do it? ");
console.log("Ques-5 : Write a JS program to create a word meaning dictionary of 5 words.");
// Ques - 1
let a = "This is String"
console.log(a);
let b = 10
console.log(a + b); // concat string with number

// Ques - 2
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(a+b));

//Ques - 3
const obj =
{
    "name" : "Saif" ,
    "age" :24 ,
    "gender" : "male",
    "Employ" : false
}
console.log(obj);
 // obj = 20 // it will give error bcoz already define as object

// Ques - 4
obj["Friend"] = "Areeb"
console.log(obj);
obj["Employ"] = true
console.log(obj);

// Ques - 5
const dictionary =
{
    "respectable": "considered by society to be good, proper or correct" ,
    "honorarium": "a payment made for somebody’s professional services" ,
    "reimburse": "to pay money back to somebody" ,
    "overwhelm": "to cause somebody to feel such a strong emotion" ,
    "zenith": "directly above you" , 
    "yakka" : "word , specially hard-work"
}

console.log(dictionary);
console.log(dictionary.yakka);
console.log(dictionary['zenith']);