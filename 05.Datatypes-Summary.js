//Primitive
// 7 Types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('2002')
const anotherId = Symbol('2002')

console.log(id === anotherId);

const bigNumber = 45544454532654325987234359n

//Reference(Non-Primitive):- 
//Array, Objects, Functions
const heros = ["Avenger", "Ironman", "Thor"];
let myObj = {
    name:"Gaurav",
    age: 21,
    profession: "Software Developer",
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof heros);