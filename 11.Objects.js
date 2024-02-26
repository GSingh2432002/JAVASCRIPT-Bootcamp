//Singleton
//Object.create

//Object Literals
const mySym = Symbol("Key1");
const jsUser = {
    name:"Gaurav",
    "full name" : "gaurav singh",
    age:"21",
    [mySym] : "713148",
    location:"Kolkata",
    email:"gks24@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday", "Tuesday"]
}
// console.log(jsUser.email);
// console.log(jsUser["full name"]);
// console.log(jsUser["email"]);
// console.log(jsUser[mySym]);

jsUser.email = "gp34@gmail.com";
// console.log(jsUser.email);
// Object.freeze(jsUser);
// jsUser.email = "pksingh34@gmail.com";
// console.log(jsUser.email);

jsUser.greeting = function(){
    console.log("Hello Gaurav");
} 
jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(jsUser.greetingTwo());
console.log(jsUser.greeting());