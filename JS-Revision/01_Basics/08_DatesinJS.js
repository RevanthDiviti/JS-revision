// Dates

let myDate = new Date();
// console.log(myDate.toString());  //Ans - Sat Jan 13 2024 09:22:18 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); //Ans - Sat Jan 13 2024
// console.log(myDate.toLocaleString());  // Ans - 1/13/2024, 9:22:18 AM
// console.log(typeof myDate);  //Ans - object


//let myCreatedDate = new Date(2024,0,23)  
//console.log(myCreatedDate.toDateString())  // Ans -Tue Jan 23 2024
//let myCreatedDate = new Date(2024,0,23,5,3)  
//console.log(myCreatedDate.toLocaleString())  // Ans - 1/23/2024, 5:03:00 AM

let myCreatedDate = new Date("2023-01-14")  
//console.log(myCreatedDate.toLocaleString());  // Ans - 1/14/2023, 12:00:00 AM

let myTimeStamp = Date.now() //It gives the value in milliseconds

//console.log(myTimeStamp); // 1705139469069

// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate);  // Ans - 2024-01-13T09:58:00.000Z
console.log(newDate.getMonth());  //Ans - 0
console.log(newDate.getDay());  //Ans - 6

