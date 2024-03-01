// const coding = ["js","py","cpp","java"]
// const values = coding.forEach((item) => {
//     // console.log(item);
//     return item
// })
// console.log(values);

//Using filter
// const myNums = [1,2,3,4,5,6,7,8,9]
// const newNums = myNums.filter((num) => {
//     return num > 4
// })

//Using for-Each loop
// const newNums = []
// myNums.forEach((num) => {
//     if(num>4){
//         newNums.push(num)
//     } 
// })
// console.log(newNums);

const books = [
    {
        title:'Book One', genre:'Fiction', publish:1981, edition:2004
    },
    {
        title:'Book Two', genre:'History', publish:1982, edition:2001
    },
    {
        title:'Book Three', genre:'Sci-Fi', publish:1991, edition:2008
    },
    {
        title:'Book Four', genre:'History', publish:1979, edition:2005
    },
    {
        title:'Book Five', genre:'Non-Fiction', publish:1989, edition:2002
    },
];
// const userBooks = books.filter((bk) => bk.genre === 'History');
// const userBooks = books.filter((bk) => {return bk.publish >= 1995})
// console.log(userBooks);

// const myNumers = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNumers.map((num) => {
//     return num + 10
// })
// console.log(newNums);


//Chaining
// const myNumers = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNumers
//                         .map((num) => num*10)
//                         .map((num) => num+1)
//                         .filter((num) => num>= 40)
// console.log(newNums);


//Reducers
const myNums = [1,2,3]
// const myTotal = myNums.reduce(function(acc,currval) {
//      console.log(`acc: ${acc} and currval: ${currval}`);
//      return acc + currval;
// },10)
const myTotal = myNums.reduce((acc,curr) => acc+curr,0)
console.log(myTotal);