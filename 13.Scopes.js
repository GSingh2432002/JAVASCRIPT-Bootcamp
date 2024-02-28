//Global Scope ->
//Local Scope ->

let a = 300
if (true){

    let a = 20
    const b = 30
    // console.log("Inner: ", a);
    // var c = 50 

}
// console.log(a);
// console.log(b);
// console.log(c);

//Nested Scope
function one(){
    const username = "Gaurav";

    function two(){
        const website = "Youtube";
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if(true){
    const username = "gks"
    if(username === "gks"){
        const website = " youtube.com"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// Interesting Part
// 1st Part
console.log(addone(5));
function addone(num){
    return num + 1
}

//2nd Part
// addtwo(5)
// const addtwo = function(num){
//     return num + 2
// }