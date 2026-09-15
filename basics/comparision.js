// console.log(2 > "1"); // true
// console.log(2 < "1"); // false  


console.log("2" > 1); // true
console.log("01" == 1); // true

// typescrpipt does not allow conversion of different type of datatypes. It will throw an error if we try to compare different types of data types.

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true     

// The reason is that an equality check == and comparisions > < >= <= work differently.
// Comparisons convert null to a number, treating it as 0. But equality check does not convert null to a number. It only returns true for null and undefined.
// That is why null >= 0 is true, but null > 0 and null == 0 are false.

console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false    

// === 

console.log("2" === 2); // false
console.log(2 === 2); // true 