let score = null;

//console.log(typeof score); // string
//console.log(typeof (score)); // string

let valueInNumber = Number(score);
// console.log("Type of :", typeof valueInNumber);
// console.log(valueInNumber);
// console.log(Number(true));

// Note;
/*
-> conversion from string to number "Number" object results as:
console.log(Number("33"))
"33" => 33 

but when we do type of this string results as NaN
console.log(typeof "33abc")
"33abc" => NaN

console.log(Number(null));// 0
console.log(Number(undefined)); NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0

*/

// Boolean conversion
let isLoggedIn = "any text";

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);
/* 
let isLoggedIn = 1;
console.log(booleanIsLoggedIn); // true

let isLoggedIn = 0;
console.log(booleanIsLoggedIn); // false

let isLoggedIn = "";
console.log(booleanIsLoggedIn); // false

let isLoggedIn = "any text";
console.log(booleanIsLoggedIn); // true
*/

// String to Number conversion
let num = 33;
let strToNum = String(num);
//console.log(strToNum); // 33
//console.log(typeof strToNum); // type of 33 gives you string

//console.log(+true); // 1
//console.log(+""); // 0
// ****** Operations **********

let gameCounter = 100;
gameCounter++;
console.log("Postfix:", gameCounter);// If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.
++gameCounter;
console.log("Prefix:", gameCounter); // If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.
console.log(gameCounter);
