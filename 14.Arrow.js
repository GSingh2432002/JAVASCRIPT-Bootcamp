const user = {
    username:"GKSingh",
    price: 999999999999,

    welcomeMessage:function(){
        // console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}
// user.welcomeMessage();
// user.username = "Anchal";
// user.welcomeMessage();
// console.log(this);

// function chai(){
//     let username = "GKS"
//     console.log(this.username);
// }
// chai()

// function chai(){
//     let username = "GKS"
//     console.log(this.username);
// }

const chai = () => {
    let username = "Sushmita Singh"
    // console.log(this);
}
// chai()

//Arrow Function
//Explicit Return using Return Keyword

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }
// console.log(addTwo(4,10));

//Implicit Return without using Return Keyword
// const addTwo = (num1,num2) =>  num1 + num2 &
// const addTwo = (num1,num2) => (num1 + num2)

// Object Return using Implicit Arrow Functions
const addTwo = (num1,num2) => ({username:"RANDOM"})
console.log(addTwo(4,10));
