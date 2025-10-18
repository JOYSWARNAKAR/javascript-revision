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

// console.log(id === anotherId);

// const bigNumber = 4546546545465445n


// Reference (Non primitive)

// Array, Objects,Functions

const heros = [ "Shaktiman", "naagraj", "doga"]

let myObj = {
    name: "joy",
    age :21
}
const myFunction = function() {
    // console.log("Hello world");
    
}
// console.log(typeof myFunction);

// referenece material :  ecmascript docs


///// ++++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack(Primitive) ->gives a copy of variable or object  , Heap(Non-Primitive)-> gives original refernce 

let myName = "joy"

let anotherName = myName
anotherName = "hello world"
console.log(myName);
console.log(anotherName);

let userOne = {
    email: "joy@gmail.com",
    upi: "user@yjh"
}
let userTwo = userOne
userTwo.email = "joy09@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);


