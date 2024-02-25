//Numbers
const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);


console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 23.896
console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

//Maths
const maths = 100000;
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.5666556));
console.log(Math.random());
console.log(Math.random()*100);

const min = 10;
const max = 50;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);