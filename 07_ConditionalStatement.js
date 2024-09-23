console.log("Conditional Statements");
console.log("Sometimes we might have to execute a block of code based off some condition.");
console.log("Sometimes we might have to execute a block of code based off some condition.");
console.log("For example age of the display a prompt might ask for the user and if a special message. its greater than 18.");
console.log("In Javascript we Statement have three forms of if ... else.");
console.log("if statement");
console.log("if ... else statement");
console.log("if ... else if ... else statement");

let a = "14"
a = Number.parseInt(a); // Converting the string to a number
if(a<0){
  console.log("This is an invalid age");
}
else if(a<9){
  console.log("You are a kid and you cannot even think of driving");
}
else if(a<18 && a>=9){
    console.log("You are a kid and you can think of driving after 18");
}
else{
    console.log("You can now drive as you are above 18");
}
console.log("Done")
console.log("You can", (a<18? "not drive" :"drive"))