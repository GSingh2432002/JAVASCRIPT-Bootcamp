/*
class User {
    constructor(email,password){
        this.email = email;
        this.password = password;
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value 
    }
    
    get password(){
        return `${this._password}gaurav`
    }
    set password(value){
        this._password = value
    }
}

const gaurav = new User("gs@innerHeight.ai","abc")
console.log(gaurav.email);
*/
//Define using properties of get and set
//Function based syntax
/*
function User(email,password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this,'email',{
        get:function(){
            return this._email.toUpperCase();
        },
        set:function(value){
            this.email = value
        }
    })
    Object.defineProperty(this,'password', {
        get:function(){

        },
        set:function(value){
            this._password = value
        }
    })
}
const chai = new User("chai@tea.com","chai")
console.log(chai.email);
*/
//Object based syntax
const User = {
    _email:"h2gmail.com",
    _password:"abc",

    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
        this._email =  value
    }
}
const tea = Object.create(User)
console.log(tea.email);