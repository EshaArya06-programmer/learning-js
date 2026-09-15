// Primitive 

// 7 types : String, Number, BigInt, Boolean, undefined, Symbol, null

const score = 33; // number
const scoreValue = "33"; // string
const isLoggedIn = false; // boolean
const outsideTemp = null; // null
let userEmail; // undefined

const id = Symbol('123'); // symbol
const anotherId = Symbol('123'); // symbol

console.log(id === anotherId); // false

const bigNumber = 34567890123456789012345678901234567890n; // BigInt



// Non-Primitive(Reference) : Object, Array, Function

const heros = ["shaktiman", "naagraj", "doga"]; // array
let myObj = {
    name: "Esha",
    age: 22
}

const myFunction = function() {
    console.log("Hello World");
}

const myFunnction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber); // bigint
console.log(typeof outsideTemp); // object

