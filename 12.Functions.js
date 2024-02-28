function sayMyName(){
    console.log("Gaurav");
    console.log("Kumar");
    console.log("Singh");
}
// console.log(sayMyName()); 

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result;
    return number1 + number2;
}
// addTwoNumbers(4, 6);
const result = addTwoNumbers(5, 10);
// console.log("Result: ", result);

function loginUserMessage(username = "Anchal"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("BA 2026"));
// console.log(loginUserMessage()); 

function calculateCartPrice(val1,val2,...num1){
    return num1
}
// console.log(calculateCartPrice(200,300,400,500,600));

const user = {
    username : "UEMK",
    price : 299
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// console.log(user);
handleObject({
    username : "UEMK-PRO",
    price: 300
})

const myNewArray = [200,300,400,500]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));