
let age = 22;
const name = "Sakhi";
// let → value can be reassigned.
// const → variable cannot be reassigned.

// const name = "Sakhi";       // string
// const age = 22;             // number
// const isStudent = true;     // boolean
// const something = null;     // null
// let result;                 // undefined

//for finding what type of data it is
console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);

//excercise 1
const Name=bob;
const Age=25;
let fav_Programmming="python";
let learning_MERN=true;
const git_repo=null;

//operations + - * / %
const a = 17;
const b = 5;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);  //this gives the remainder

//excercise 2
const price = 499;
const quantity = 3;
let total_price=price*quantity;

//strings
const firstName = "Sakhi";
console.log(firstName[0]);
console.log(firstName[1]);
console.log(firstName.length);
//string mthods
// .toUpperCase()
// .toLowerCase()
// .trim()
// .includes()
// .indexOf()
// .slice()

const username = "   sakhi123   ";
console.log(username.trim());
console.log(username.toUpperCase());
console.log(username.includes("123"));

//excercise 3
const usernames = "   SakhiDeveloper   ";
//Removes spaces at the beginning/end
console.log(usernames.trim());
console.log(usernames.toLowerCase());
console.log(usernames.includes("developer"));
console.log(usernames.length);

//template literals
console.log(`Next year I will be ${age + 1}.`);
//Profile generator
const namee = "sakhi";
const agee = 7;
const rolee = "sde";
const cityy = "hyderabad";
console.log(`Name:${namee}`);
console.log(`agee:${agee}`);
console.log(`rolee:${rolee}`);
console.log(`cityy:${cityy}`);

//Type conversion
//eg 
const AGE = "22";
console.log(typeof AGE);


//excerice 5
const a = "10";
const b = "5";
console.log(a + b);  //105
console.log(a - b);   //error
console.log(a * b);   //error


//Challenge 1 — Bill calculator
const itemPrice = 250;
const Quantity = 4;
const discountPercentage = 15;
const taxPercentage = 18;

