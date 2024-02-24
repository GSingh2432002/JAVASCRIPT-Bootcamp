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
