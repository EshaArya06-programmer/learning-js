// ********************DATA TYPE CONVERSIONS*******************


// let score = "33abc"

// console.log(typeof score);

// let valueInNumber = Number(score);  // convert to number
// console.log(typeof valueInNumber);
// console.log(valueInNumber); // NaN => not a number

// let score = null;
// console.log(typeof score); // object


// let valueInNumber = Number(score);  
// console.log(typeof valueInNumber);
// console.log(valueInNumber); 

//  let score = undefined;
// console.log(typeof score); // undefined


// let valueInNumber = Number(score);  
// console.log(typeof valueInNumber);
// console.log(valueInNumber); 

// let score = true;
// console.log(typeof score); // boolean


// let valueInNumber = Number(score);  
// console.log(typeof valueInNumber);
// console.log(valueInNumber); 

// let score = "Esha";
// console.log(typeof score); // string


// let valueInNumber = Number(score);  
// console.log(typeof valueInNumber);
// console.log(valueInNumber); 

// let isLoggedIn = 1;

// let boolenIsLoggedIn = Boolean(isLoggedIn); // convert to boolean
// console.log(typeof boolenIsLoggedIn);
// console.log(boolenIsLoggedIn);

// 1 => true; 0 => false
// "" => false; 
// "Esha" => true

// let someNumber = 33;

// let stringNumber = String(someNumber); // convert to string
// console.log(typeof stringNumber);
// console.log(stringNumber);

// ******************* OPERATIONS *******************

let value = 3
let negValue = -value; // convert to negative
// console.log(negValue);

// // cosole.log(value.toString()); // convert to string

// console.log(2 + 2); // 4
// consol.log(2-2); // 0    
// console.log(2*2); // 4
// console.log(2/2); // 1
// console.log(2**3); // 8 => 2*2*2
// console.log(2%3); // 2 => remainder  

let str1 = "Esha";
let str2 = " Saha";

let str3 = str1 + str2; // concatenation
// console.log(str3); // Esha Saha

// console.log("1" + 2); // 12 => string + number = string
// console.log(1 + "2"); // 12 => number + string = string
// console.log("1" + 2 + 2); // 122 => string + number + number = string
// console.log(1 + 2 + "2"); // 32 => number + number + string = string

// console.log(true); // true
// console.log(+true); // 1
// console.log(+""); // 0

let num1, mum2, num3;

num1 = num2 = num3 = 2 + 2; // right to left associativity
// console.log(num1, num2, num3); // 4 4 4 

let gameCounter = 100;
gameCounter++; // increment by 1
console.log(gameCounter); // 101