
// Stack Memory:
// 1) Primitive data types will be stored in Stack Memory.
//2) We get copy of declared variable

// Heap Memory
//  1) Non-primitive data types will be stored in Heap Memory.
//  2)We get original memory value from Heap memory.

let myYoutubename = "hiteshchoudarydotcom";
let anothername = myYoutubename
anothername= "chaiaurcode"

console.log(myYoutubename);  //hiteshchoudarydotcom
console.log(anothername);  // chaiaurcode

let userTwo = userOne

userTwo.email = "hiteshgoogle.com"

console.log(userOne.email); //hiteshgoogle.com
console.log(userTwo.email);  // hiteshgoogle.com
