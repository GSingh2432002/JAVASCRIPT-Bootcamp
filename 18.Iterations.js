// For
// for(let index=0; index<=10; index++){
//     const element = index;
//     if(element == 5){
//         console.log("5 is best number");
//     }
//     console.log(element);
// }

// for(let i=1; i<=10; i++){
//     console.log(`Outer Loop value: ${i}`);
//     for(let j=1; j<=10; j++){
//         console.log(`Inner loop Value: ${j} and inner loop ${i}`);
//         console.log(i + '*' + j + '=' + i*j);
//     }
// }

// let myArray = ["Flash", "Batman", "Superman"]
// console.log(myArray.length);
// for(let index=0; index<myArray.length; index++){
    // const element = myArray[index];
    // console.log(element);
// }


// break & continue ->
// for(let i=0; i<=20; i++){
//     if(i == 5){
//         console.log(`Detected 5`);
//         break;
//     }
//     console.log(`Value of I is ${i}`); 
// }

// for(let i=0; i<=20; i++){
//     if(i == 5){
//         console.log(`Detected 5`);
//         continue;
//     }
//     console.log(`Value of I is ${i}`); 
// }


// While
// let i = 0;
// while(i<=10){
//     console.log(`Value of index is ${i}`);
//     i = i + 2;
// }

// let myArray = ['flash','batman','superman']
// let arr = 0
// while(arr < myArray.length){
//     console.log(`value is ${myArray[arr]}`);
//     arr = arr + 1;
// }


// do-while ->
// let score = 1
// do{
//     console.log(`score is ${score}`);
//     score++;
// }while(score <= 10);


// for-of
// const arr = [1,2,3,4,5,6]
// for(const num of arr){
//     console.log(num);
// }

// const greetings = "Hello World!"
// for(const great of greetings){
//     console.log(`Each char is ${great}`);
// }

 
// Maps
// const map = new Map()
// map.set('IN', "India");
// map.set('USA', "United States of America");
// map.set('FR', "France");
// // console.log(map);

// for(const [Key,value] of map){
//     console.log(Key, ':-', value);
// }

// const myObject = {
//     'game1' : 'nfs',
//     'game2' : 'gta',
// }
// for(const [key,value] of myObject){
//     console.log(key, ':-', value);
// }


// Object using Map function
// const myObject = {
//     js: 'Javascript',
//     cpp: 'c++',
//     rb: 'ruby',
//     swift: 'swift by apple'
// }
// for(const key in myObject){
//     console.log(`${key} shorcut is for ${myObject[key]}`);
// }


// For-in loop in Map
// const programming = ["js","rb","py","cpp","scala"]
// for(const key in programming){
//     console.log(programming[key]);
// }

// For-in loop in Map
// const map = new Map()
// map.set('IN', "India");
// map.set('USA', "United States of America");
// map.set('FR', "France");

// for (const key in map) {
//     console.log(key);
// }


// For-each loop
// const coding = ["js","rb","py","cpp","scala"]
// coding.forEach(function (item) {
//     console.log(item);
// })

const coding = ["js","rb","py","cpp","scala","java","php"]
// coding.forEach((item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach((item,index,arr) => {
//     console.log(item,index,arr);
// })

const myCoding = [
    {
        languageName: 'javascript',
        languageFileName: 'js'
    },
    {
        languageName: 'java',
        languageFileName: 'java'
    },
    {
        languageName: 'c++',
        languageFileName: 'cpp'
    },
]

myCoding.forEach((item) => {
    console.log(item.languageName);
    console.log(item.languageFileName);
})