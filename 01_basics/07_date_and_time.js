// Dates
let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString()); // Fri Oct 24 2025
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString()); // 10/24/2025
// console.log(myDate.toLocaleString());

// console.log(typeof myDate); // object

// let myCreatedDate = new Date(2025,0,23)
// let myCreatedDate = new Date(2025,0,23,5,3)
// let myCreatedDate = new Date("2025-10-24") //10/24/2025, 12:00:00 AM
let myCreatedDate = new Date("10-24-2025") // 10/24/2025, 12:00:00 AM

// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp); // give a milisecond value
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now() / 1000) );

let newDate = new Date()
console.log(newDate);  // 2025-10-24T11:34:48.121Z
console.log(newDate.getMonth());
console.log(newDate.getDate());
console.log(newDate.getDay());

// String interpolation : `${newDate.getDay()}`
newDate.toLocaleString('default',{
    weekday:"long",

})

