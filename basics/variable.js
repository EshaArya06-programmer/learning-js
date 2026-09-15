const accountId = 1234    //value can not be c hanged
let accountEmail = "esha@google.com"    
var accountPassword = "0987"
accountCity = "Milak"
let accountState;

// accountId = 2 //not allowed

accountEmail = "esha.com"
accountPassword = "7654"
accountCity = "Delhi"

console.log(accountId);

console.table([accountEmail, accountPassword, accountCity, accountState]);

/*
Prefer not to use var
because of issue in block scope and hoisting and function scope
*/