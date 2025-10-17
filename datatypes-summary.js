//  Primitive (call by value)

// 7 types: String,Number,Boolean,null,undefined,Symbol,Bigint

// Is js is dynamically or statically typed language?

const score = 100 
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail

const id = Symbol('[123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 4546546545465445n


// Reference (Non primitive)

// Array, Objects,Functions

const heros = [ "Shaktiman", "naagraj", "doga"]

let myObj = {
    name: "joy",
    age :21
}
const myFunction = function() {
    console.log("Hello world");
    
}
console.log(typeof myFunction);

// referenece material :  ecmascript docs

