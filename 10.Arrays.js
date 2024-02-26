//Arrays
const myArr = [0,1,2,3,4,5];
// const myDanger = ["Gaurav", "Singh"];
// console.log(myArr);
// console.log(myDanger);

// const myArr2 = new Array(1,2,3,4,5);
// console.log(myArr2[3]);

//Array Methods
// myArr.push(7);
// myArr.pop();
// myArr.unshift(9);
// myArr.shift(9);
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(2));
// const newArr = myArr.join();

// console.log(myArr); 
// console.log(newArr);

//Slice -> In slice the original array remain same
//Splice -> It changes the original array
console.log("A", myArr);
const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3);
console.log("C", myArr);
console.log(myn2);