let score = "21ABC"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

let isLoggedIn = 1 
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn, typeof booleanIsLoggedIn);

let someNumber = 2002
let stringNumber = String(someNumber)
console.log(stringNumber, typeof stringNumber);

//Notes:-
// "21" => 33
// "21ABC" => NaN
// true => 1; false => 0
// 1 => true; 0 => false
// "" => false
// "Gaurav" => true

// ***************************** Operations ******************************

// let value = 24
// let negValue = -value
// console.log(negValue);

let str1 = "Gaurav"
let str2 = "Singh"

let str3 = str1 + str2
console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log((3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+""); 

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
--gameCounter;
gameCounter++;
++gameCounter;
gameCounter--;
console.log(gameCounter);