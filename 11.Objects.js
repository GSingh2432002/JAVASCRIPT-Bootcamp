
// //Object Literals
// const mySym = Symbol("Key1");
// const jsUser = {
//     name:"Gaurav",
//     "full name" : "gaurav singh",
//     age:"21",
//     [mySym] : "713148",
//     location:"Kolkata",
//     email:"gks24@gmail.com",
//     isLoggedIn:false,
//     lastLoginDays:["Monday", "Tuesday"]
// }
// // console.log(jsUser.email);
// // console.log(jsUser["full name"]);
// // console.log(jsUser["email"]);
// // console.log(jsUser[mySym]);

// jsUser.email = "gp34@gmail.com";
// // console.log(jsUser.email);
// // Object.freeze(jsUser);
// // jsUser.email = "pksingh34@gmail.com";
// // console.log(jsUser.email);

// jsUser.greeting = function(){
//     console.log("Hello Gaurav");
// } 
// jsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
// }
// console.log(jsUser.greetingTwo());
// console.log(jsUser.greeting());

//  ***************************** Part Two ************************************

//Singleton
//Object.create

// const tinderUser = {}
// tinderUser.id = "123abc"
// tinderUser.name = "Gaurav"
// tinderUser.isLoggedIn = false
// // console.log(tinderUser);

// const regularUser = {
//     email : "gsingh332211@gmail.com",
//     fullname:{
//         userfullname:{
//             firstname:"Gaurav",
//             lastname:"Singh"
//         }
//     }
// }
// // console.log(regularUser.fullname?.userfullname);
// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "c", 4: "d"}

// // const obj3 = {obj1, obj2};  
// // const obj3 = Object.assign({}, obj1, obj2)
// const obj3 = {...obj1, ...obj2}
// // console.log(obj3);

// const users = [
//     {
//         id:1,
//         email: "h@gmail.com"
//     },
//     {
//         id:1,
//         email: "h@gmail.com"
//     },
// ]

// // users[1].email;

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("id", "gift"));

//  ***************************** Part Three ************************************
//Destructuring

const course = {
    coursename : "Js Hindi",
    price : "999",
    courseInstructor : "Gaurav"
}

const {courseInstructor} = course;
console.log(courseInstructor);
