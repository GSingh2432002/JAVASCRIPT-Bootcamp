const name = "Gaurav"
const repoCount = 2002

// console.log(name + repoCount + "Value"); 

//Interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('The Legend of Zelda');
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(typeof gameName);
console.log(gameName.charAt(12));
console.log(gameName.indexOf('Z'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-19, 4)
console.log(anotherString);

const newStringOne = "    Gaurav     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://gaurav.com/gaurav%20singh"
console.log(url.replace('%20','?'));
console.log(url.includes("gks"));
console.log(gameName.split('_'));
