const accountId = 96582
let accountEmail = "joy@gmail.com"
var accountPassword = "123456"
accountCity = "Goa"
let accountState;

// accountId =2  // not allowed
accountEmail = "hello@gmail.com"
accountPassword = "20569"
accountCity = "Mumbai"

console.log(accountId);

/*
Prefer not to use var because of issue in block
scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,
    accountCity,accountState]);


