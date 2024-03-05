/*
let myName = "gksingh"
console.log(myName.trueLength); 

let myHeros = ["Thor", "Spiderman"]

let heroPower = {
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower:function(){
        console.log(`Spidy power is  ${this.spiderman}`);
    }
}

Object.prototype.gaurav = function(){
    console.log(`Gaurav is present in all objects`);
}

Array.prototype.heyGaurav = function(){
    console.log("Shree Shankar Singh");
}

//heroPower.gaurav();
myHeros.gaurav();
myHeros.heyGaurav();
//heroPower.heyGaurav();


//Inheritance
const User = {
    name:"chai",
    email:"g24@gmail.com",
}

const Teacher = {
    makevideo:true
}
const TeachingSupport = {
    isAvailable:false
}
const TASupport = {
    makeAssignment:'JS Assignment',
    fulltime:true,
}

//Modern Syntax
Object.setPrototypeOf(TeachingSupport,Teacher)
*/

let anotherUsername = "chai and code              "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is : ${this.trim().length}`);
}
anotherUsername.trueLength();
"gaurav".trueLength();
"gks".trueLength();