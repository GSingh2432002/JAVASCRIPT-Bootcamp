function SetUsername(username){
    this.SetUsername = username;
}

function createUser(username,email,password){
    SetUsername.call(this,username)
    this.email = email;
    this.password = password;
}
const chai = new createUser("chai", "chai@gmail.com", "2002")
console.log(chai);