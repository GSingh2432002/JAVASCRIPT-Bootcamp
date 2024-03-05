//Object Literals
const user = {
    username:"gaurav",
    loginCount:8,
    signedIn:true,

    getUserDetails:function(){
        // console.log("Got user details from database");
        console.log(`username: ${this.username}`);
        console.log(this);
    }
}
//console.log(user.username);
//console.log(user.getUserDetails());
//console.log(this);

//Constructor function
function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greetings = function(){
        console.log("Gaurav Kumar Singh");
    }
    //return this
}
const userOne = new User("Gaurav",12,true)
const userTwo = new  User("Chai&Code",13,false)
console.log(this.greetings instanceof  Function);
console.log(userTwo);