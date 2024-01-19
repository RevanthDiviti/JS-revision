// Shallow copy -  It shares the same references. Example below

/* 
let x=20;
let y=x;
y=30;

Now x and y both values are 30. 
*/

// Deep Copy - It do not share the same reference. 

const myArr = [0,1,2,3,4,5]
const stringArray = ["batman" , "Shakthiman"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr2[0])


// Array Methods

// myArr.push(6)  // Push adds the element into array
// myArr.push(7)
// myArr.pop()  // Removes last element from the array

//myArr.unshift(9) // Ans - [9, 0, 1, 2,3, 4, 5]  --> It adds the element in the begining. It shifts all the values forward. So it will give burdain on computer.

//myArr.shift() //Ans - [0, 1, 2,3, 4, 5] --> It shifts the elements to left and removes 0th index value

console.log(myArr.includes(9));  // Ans - true/false --> 
console.log(myArr.indexof(-17)) // Ans = -1. If we give the element which is not existed, It gives -1.
console.log(myArr.indexof(3))  // Ans = 3 . It gives the index value of the given element

console.log(myArr)