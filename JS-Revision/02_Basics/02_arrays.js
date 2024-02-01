
// Class - 15

const marvel_heros = ["thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman","Flash", "batman"]

//marvel_heros.push(dc_heros) // Wys to add elements into array.

//console.log(marvel_heros); // [ 'thor', 'Ironman', 'Spiderman', [ 'Superman', 'Flash', 'batman' ] ]  --> Inserts dc_heros list as an element. Not its elements.

// CONCAT

const allHeros = marvel_heros.concat(dc_heros); // concat - Combines two or more arrays. This method returns a new array without modifying any existing arrays.
//console.log(allHeros);  // [ 'thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'batman' ]

/// Spreadout : If we use ... Three dots before array, It spreads the elements.

const all_new_heros = [...marvel_heros, ...dc_heros]
//console.log(all_new_heros) //[ 'thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'batman' ]

//console.log(..."Revanth") // R e v a n t h

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

// flat() - Returns a new array with all sub-array elements concatenated into it recursively upto the specified path. It takes parameters that how many deapths it has to cover. For all we can give infinity

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array) // [1, 2, 3, 4,5,6, 7, 6, 7, 4, 5]


//isArray checks whether the given parameter is array or nor
console.log(Array.isArray("Hitesh"))  // false
// from -> converts string to array
console.log(Array.from("Revanth")) // ['R', 'e', 'v','a', 'n', 't','h'] 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [100,200,300]