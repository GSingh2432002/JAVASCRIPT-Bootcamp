//Stack(Primitive) -> Here we get a copy of data.
//Heap(Non-Primitive) -> Here we get reference of data.

let myYoutubename = "Gaurav.gks.2002"

let anothername = myYoutubename
anothername = "BlazeFire"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "gsingh332211@gmail.com",
    upi:"gsingh@ybl"
}

let userTwo = userOne

userTwo.email = "anchalSingh24@gmail.com"

console.log(userOne.email, userTwo.email);