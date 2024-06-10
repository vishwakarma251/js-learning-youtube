//console.log("2" > 2); // false because JavaScript converts the string to a number and then performs the comparison. In this case, "2" is converted to the numeric value 2, and 2 > 2 evaluates to false.
//console.log("02" > 1); // true because JavaScript converts the string to a number and then performs the comparison. In this case, "02" is converted to the numeric value 2, and 2 > 1 evaluates to true.

console.log(null > 0) // false because null is not greater than 0.
console.log(null == 0) // false null is considered equal only to undefined, not to any other value.
console.log(null >= 0) // true JavaScript converts null to the numeric value 0 during the comparison, making null “greater than or equal to” 0.
