//Prefer not to use var because of issue in block scope and functional scope
//The let keyword is an improved version of the var keyword.These variables has the block scope. It can’t be accessible outside the particular code block ({block})
//The const keyword has all the properties that are the same as the let keyword, except the user cannot update it and have to assign it with a value at the time of declaration. These variables also have the block scope. It is mainly used to create constant variables whose values can not be changed once they are initialized with a value.

const accountId = 24
let accountEmail = "gsingh321@gmail.com"
var accountPassword = "12345"
accountCity = "Kolkata"

// accountId = 23
accountEmail = "gsingh34@gmail.com"
accountPassword = "qwerty"
accountCity = "Chennai"

console.log([accountEmail,accountId,accountPassword,accountCity]);