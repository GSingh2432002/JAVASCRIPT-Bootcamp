// let myData = new Date();
// console.log(myData.toString()); 
// console.log(myData.toDateString()); 
// console.log(myData.toLocaleString()); 
// console.log(typeof myData); 

// let myCreateDate = new Date(2024,0,26);
// let myCreateDate = new Date(2024, 0, 23, 5, 5);
// let myCreateDate = new Date("2024-01-29");
let myCreateDate = new Date("02-14-2023");
// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());

newDate.toLocaleString('default',{
    weekday: "long",
});