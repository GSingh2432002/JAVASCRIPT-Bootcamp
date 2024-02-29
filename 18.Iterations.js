// For
for(let index=0; index<=10; index++){
    const element = index;
    if(element == 5){
        // console.log("5 is best number");
    }
    // console.log(element);
}

for(let i=1; i<=10; i++){
    // console.log(`Outer Loop value: ${i}`);
    for(let j=1; j<=10; j++){
        // console.log(`Inner loop Value: ${j} and inner loop ${i}`);
        // console.log(i + '*' + j + '=' + i*j);
    }
}

// let myArray = ["Flash", "Batman", "Superman"]
// console.log(myArray.length);
// for(let index=0; index<myArray.length; index++){
    // const element = myArray[index];
    // console.log(element);
// }

// break & continue ->
for(let i=0; i<=20; i++){
    if(i == 5){
        // console.log(`Detected 5`);
        break;
    }
    // console.log(`Value of I is ${i}`); 
}

for(let i=0; i<=20; i++){
    if(i == 5){
        // console.log(`Detected 5`);
        continue;
    }
    // console.log(`Value of I is ${i}`); 
}

// While
let i = 0;
while(i<=10){
    // console.log(`Value of index is ${i}`);
    i = i + 2;
}

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