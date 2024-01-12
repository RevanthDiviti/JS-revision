const name= "Revanth";
const repoCount = 50;

console.log(name+repoCount+"value");  // Revanth50value

//  `` - When we use backtikcs, String interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)   //This is the updated way to make string dynamic


const gameName = new String("hitesh-hc")

console.log(gameName[0]);
console.log(gameName.__proto__);  //  ??

console.log(gameName.length);  // To get length of string.
console.log(gameName.toUpperCase());  // To get all chars in uppercase

console.log(gameName.charAt(2));  // To get which character at given index position

console.log(gameName.indexOf("t"));  //To get at which index given character is!

/// Slicing *****

const newString = gameName.substring(0,4)   // We should not give negative values in substring. It wont allow.
console.log(newString)   // Ans - hite

const anotherString = gameName.slice(-8,4)
console.log(anotherString)

const newStringOne = "   hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim()) //trim is used to remove spaces in string
