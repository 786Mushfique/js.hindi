const accountId = 144553;
let accoutEmail = "hiteh@google.com";
var accountPassword = "12345";
accountCity = "jaipur";
let accountState;
accoutEmail = "hc@hc.com";
accountPassword = "2121212";
accountCity = "mumbai";

// accountId = 2; // not allowed
console.log(accountId);

/*

prefer not use of var because of issues in block scope and functional scope

*/

console.table([accountId,accoutEmail,accountPassword,accountCity,accountState])