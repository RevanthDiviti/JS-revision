const score = 400;
//console.log(score)  //Ans - 400

const balance = new Number(100)  
//console.log(balance) // Ans - [Number: 100]
//console.log(typeof balance);  //object type

//console.log(balance.toString().length);  // Ans - 3
//console.log(typeof (balance.toString()));  // Ans - String
//console.log(balance.toFixed(1));  // Ans - 100.0

const otherNumber = 23.7890
//console.log(otherNumber.toPrecision(3))  // Ans - 23.8 --> Took 3 digits from left and rounded last digit 

const otherNumberOne = 123.7890
//console.log(otherNumberOne.toPrecision(3))  // Ans - 124 --> Took 3 digits from left and  rounded last digit.

const otherNumberTwo = 1123.7890
//console.log(otherNumberTwo.toPrecision(3)) // Ans - 1.12e+3  --> Giving exponential value as it is missing a digit.

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN'));  // Ans - 10,00,000  --> To convert into local language.

//++++++++++++ Maths +++++++++++++++++

// console.log(Math); 
// console.log(Math.abs(-4));  // Ans - 4.  "abs" means absolute value. It converts the value to positive if it is a negative value.
// console.log(Math.round(4.3)); // Ans - 4
// console.log(Math.round(4.7)); // Ans - 5  -->  It rounds up the value. 
// console.log(Math.ceil(5.1));  // Ans - 6 --> It gives the cieling value, if we keep anything after decimal point

// console.log(Math.floor(4.7))// Ans- 4. It takes the floor value. Even we keep 9 after decimal point.

// console.log(Math.min(4,7,5,1))  // Ans- 1  --> Gives minimum value.
// console.log(Math.max(4,7,5,1)) // Ans - 7  --> Gives Maximum value

console.log(Math.random())  // It gives random numbers between 0 to 1
console.log((Math.random()*10)+1)  // It multiplies the value with 10 not to get decimal value
console.log(Math.floor(Math.random()*10)+1)  // It takes the floor value after multiplying with 10 and adds 1 to it



// To get values between some range.
const min = 10
const max = 20
// console.log(Math.floor(Math.random()* (max-min + 1)) + min)