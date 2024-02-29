// If-Else Condition ->
const temperature = 41
if(temperature === 40){
    console.log("less than 50");
}
else{
    console.log("Temperature is greater than 50");
}
// console.log("Execute");
//<,>,<=,>=,==,!=,===,!==

const score = 200
if(score > 100){
    const power = "fly";
    console.log(`user power: ${power}`); 
}
// console.log(`user power: ${power}`);

const balance = 1000
if(balance > 500) console.log("test");
if(balance < 500){
    console.log("less than 500");
}else if(balance < 700){
    console.log("less than 700");
}else if(balance < 900){
    console.log("less than 900");
}else{
    console.log("less than 1200");
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}


// Switch Condition ->
// switch(key){
//     case value:
//         break;
//     default:
//         break;
// }

const month = 4;
switch (month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log( "March" );
        break;
    case 4:
        console.log("April");
        break;
    default:
        console.log("Invalid month");
        break;
    }

//Truthy & Falsy Value ->
const userEmail = "g24@gmail.com";
if(userEmail){
    console.log("Got user Email");
}else{
    console.log("Dnot have user email");
}

//Falsy values ->
// false, 0, -0, BigInt, 0n, "", null, undefined, NaN

//Thruthy Values ->
// "0", true, [], [0], [""], {a, b}, Infinity, -Infinity, < > ,'false', " ", function(){}

if(userEmail.length === 0){
    console.log("Array is empty");
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// Nullishing Coalescing Operator (??): null Undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val2 = undefined ?? 15
val1 = null ?? 10 ?? 15
// console.log(val1);

//Terniary Operator
// condition ? true : false
const iceTea = 100
iceTea <= 80 ? console.log("less than 80") : console.log("more than 80");