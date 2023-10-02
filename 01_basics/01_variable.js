const accountId = 1225533
let accountEmail = "sachin@gmail.com"
var accountpassword = "12345"
accountCity ="jaipur"
let accountState;

// accountId = 2 // not allowed

//prefer not to use var
//because of issue in block scope and functional scope

accountEmail = "sgdhhdsg@gmail.com"
accountpassword ="534646"
accountCity =" west bangal"

console.log(accountId);
console.log(accountEmail);


console.table([accountId, accountEmail, accountpassword, accountCity, accountState])
