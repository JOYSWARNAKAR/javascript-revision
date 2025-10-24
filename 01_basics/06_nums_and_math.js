const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // for building ecommerce app

const otherNumber = 125.369

// console.log(otherNumber.toPrecision(4));

const hundreads = 1000000
// console.log(hundreads.toLocaleString());
// console.log(hundreads.toLocaleString('en-IN'));  //

// +++++++++++++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++

// console.log(Math); // Object {}
// console.log(Math.abs(-4)); // 4
// console.log(Math.round(4.4)); // 4 // mostly used
// console.log(Math.ceil(4.2));  // 5
// console.log(Math.floor(4.9)); // 4
// console.log(Math.min(4,8,6,5,2,12));  // 2
// console.log(Math.max(4,8,6,5,2,12)); // 12

console.log(Math.random()); // value lie betwween 0 to 1
console.log((Math.random()*10) + 1); // 1.0000... - 10.00000....
console.log(Math.floor(Math.random()*10) + 1 ); // 1 - 10, we add +1 because sometime the value return 0, but we need value 1 to 10 range

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min +1)) + min ) // range 10 to 20














