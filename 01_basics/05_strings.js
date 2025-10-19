const name = "joy"
const repoCount = 50

// console.log(name + repoCount + " Value");  // old approach not as good

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // String interpolation method (modern way to declare a string)

const gameName = new String('joy-js-code')

// console.log(typeof gameName);
console.log(gameName [0]);
console.log(gameName.__proto__); // access prototype double underscore proto double underscore


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString =  gameName.slice(-4,-1) // cod because -4 to -2 placed character execute, -2 character don't execute. 
console.log(anotherString);

const newStringOne = "   joycode    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://helloworld.com/hello%40world"

console.log(url.replace('%40', '-'));

console.log(url.includes('hello'));
console.log(url.includes('book'));

console.log(gameName.split('-'));

// practice a lot of strings , 
// help mdn docs and some methods

// reference :mdn docs

//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice

// Slice
let car = "I have a nice car"
 console.log(car.slice(0,4)); // I ha
console.log(car.slice(-3,-5)); // blank
console.log(car.slice(-9,-2));  // nice c



// slice() extracts the text from one string and returns a new string.

// slice() extracts up to but not including indexEnd. For example, str.slice(4, 8) extracts the fifth character through the eighth character (characters indexed 4, 5, 6, and 7):

// slice() extracts up to but not including indexEnd. 

// syntax : 
// slice(indexStart)
// slice(indexStart, indexEnd)

















