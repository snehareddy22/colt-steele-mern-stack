// let age = paseInt(prompt("Age?"));
// if (age >=18){
//     console.log("you can vote");
// }
// else{
//     console.log("too young");
// }


// let number=parseInt(prompt("enter a number"));
// if (number%2==0){
//     console.log("even");
// }
// else{
//     console.log("odd");
// }

// let number=parseInt(prompt("enter a number"));
// if (number>0){
//     console.log("positive");
// }
// else if(number>0){
//     console.log("negative");
// }
// else{
//     console.log("Zero");
// }

// let score=90;
// if(score >= 90){
//     console.log("A");
// }
// else if(score >= 80){
//     console.log("B");
// }
// else if(score >= 70){
//     console.log("C");
// }
// else{
//     console.log("fail");
// }

// const username="sneha";
// const password=123345;
// if (username === "sneha" && password ===123345){
//     console.log("Login Successful");
// }
// else if(username !=="sneha"){
//     console.log("Invalid Username");
// }
// else if(password!== 123345){
//     console.log("Invalid Password");
// }


// let favMovies=["notebook","nothinghill","jerry maguire","lala land"];
// console.log(favMovies[0]);
// console.log(favMovies[favMovies.length-1]);
// console.log(favMovies.length);

// let colors = ["Red","Blue"];
// colors.push("green");
// colors.pop();
// console.log(colors)


// let nums = [10,20,30];
// nums.unshift(5);

// let fruits = ["Apple","Banana","Orange","Mango"];
// fruits.splice(1,1,"kiwi");

// let a=["HTML","CSS"];
// let b=["JavaScript","React"];
// console.log(a.concat(b));

// const array=["HTML","CSS","JavaScript"];
// if (array.includes("PYTHON")){
//     console.log("found")
// }
// else{
//     console.log("not found")
// }

// const cart = ["Laptop","Mouse","Keyboard"];
// cart.splice(1,0,"Monitor");
// console.log(cart);


// let cart = [];
// cart.push("MILK");
// cart.push("BREAD");
// cart.push("EGGS");
// cart.splice(1,1);
// cart.unshift("BUTTER");
// console.log(cart);

// const book={
//     title:"nootbook",
//     author:"dont know",
//     price:200

// }
// console.log(book.title);
// const car = {
//     brand: "Toyota",
//     year: 2020
// };
// car.year=2024

// car.color="Black"

// const student = {
//     name: "Sneha",
//     marks: [90,85,88]
// };
// console.log(student.marks[1])

// const employee = {
//     name: "John",
//     address: {
//         city: "New York",
//         country: "USA"
//     }
// };
// console.log(employee.address.city)

// const movies = [
//     {
//         title: "Interstellar",
//         rating: 9
//     },
//     {
//         title: "Inception",
//         rating: 8.8
//     }
// ];
// console.log(movies[1].title)

// const user = {
//     username: "sakhi",
//     age: 22,
//     skills: ["HTML","CSS","JavaScript"],
//     address: {
//         city: "Hyderabad",
//         state: "Telangana"
//     }
// };
// console.log(user.username)
// console.log(user.skills[2])
// user.age=23
// user.isStudent: true;
// delete user.address
// console.log(user)

// for (let i=1;i<=20;i++){
//     console.log(i)
// }
// for (let i=20;i>=1;i--){
//     console.log(i)
// }
// for (let i=2;i<=50;i+=2){
//     console.log(i)
// }
// for (let i=1;i<=25;i+=2){
//     console.log(i)
// }

// for (let i=1;i<=10;i++){
//         console.log(`7 * ${i} = ${ 7*i}`)
//     }


// let total=0
// for (let i=1;i<=100;i++){
//     total+=i
// }
//     console.log(total);



// for (let i=1;i<=50;i++){
//     if (i===31){
//         break;
//     }
//     console.log(i);
// }


// let pattern="";
// for (let i=1;i<=5;i++){
//     pattern+="*";
//     console.log(pattern)
//     }

// #hard
// for (let i=1;i<=50;i++){
//     if (i%3==0 && i%5==0){
//         console.log("FizzBuzz");
//     }
//     else if (i%3==0){
//         console.log("Fizz");
//     }
//     else if (i%5==0){
//         console.log("Buzz");
//     }
//     else{
//         console.log(i);
//     }
// }


// let colors = ["Red","Green","Blue"];
// for (let i=0;i<colors.length;i++){
//     console.log(colors[i])
// }


// for (let color of colors){
//     console.log(color)
// }

// let nums = [10,20,30,40];
// for (let i=nums.length-1;i>=0;i--){
//     console.log(nums[i])
// }

// const students = ["Rahul","Sneha","Priya","Arjun"];
// for (let i=0;i<students.length;i++){
//     console.log(`${i}. ${students[i]}`)
// }

// const matrix = [[1,2],[3,4],[5,6]];
// for (let i=0;i<matrix.length;i++){
//     for (let j=0;j<matrix[i].length;j++){
//         console.log(matrix[i][j])
//     }
// }

// const person = {name:"Sakhi",age:22,city:"Hyderabad"};
// for(let [key,value] of Object.entries(person)){
//     console.log(`${key} : ${value}`);
// }

// const classroom = [
// {
//     name:"Rahul",
//     marks:90
// },
// {
//     name:"Sneha",
//     marks:85
// },
// {
//     name:"Priya",
//     marks:95
// }
// ];
// for (let student of classroom){
//     console.log(`${student.name} scored ${student.marks}`)
// }

// const board = [
// ["X","O","X"],
// ["O","X","O"],
// ["X","O","X"]
// ];
// for (let i=0;i<board.length;i++){
//     for (let j=0;j<board[i].length;j++){
//             console.log(board[i][j])
//     }
// }

// function sayHi(){
//     console.log("hi")
// }
// sayHi()
// sayHi()
// sayHi()

// function square(num){
//     return num**2
// }
// square()

// function greet(name){
//     return(`Hello ${name}`)
// }
// greet()

// function multiply(a,b){
//     return a*b
// }
// multiply()

// function isEven(num){
//     return num%2==0;
//}

// function getFullName(first,last){
//     return (`${first} ${last}`)
// }
// getFullName()


// function lastElement(arr){
//     if(arr.length === 0){
//         return null;
//     }
//     return arr[arr.length - 1];
// }

// function capitalize(word){
//     return (word[0].toUpperCase()+word.slice(1))
// }
// capitalize()


// function sumArray(numbers){
//     let total = 0;
//     for(let num of numbers){
//         total += num;
//     }
//     return total;
// }

// function isShortsWeather(temp){
//     if (temp>=75){
//         return true
//     }
//     return false
// }
// isShortsWeather()



//     function add(a,b){
//         return (a+b)
//     }
//     function subtract(a,b){
//         return (a-b)
//     }
//     function multiply(a,b){
//         return (a*b)
//     }
//     function divide(a,b){
//         return (a/b)
//     }
//     function square(a){
//         return (a*a)
//     }
//     function cube(a){
//         return (a**3)
//     }

//section 21 functions
let animal = "Tiger";
function test() {
    let animal = "Lion";
    console.log(animal);   //lion
}
test();
console.log(animal); //tiger

function secret() {
    let password = "1234";
    return password;
}
    const password=secret();
    console.log(password);


const square=function(n){
    return n * n;
};
console.log(square(5));  // 25
console.log(square(10)); // 100

const isAdult=function(a){
    return a>=18;
};
console.log(isAdult(20)); // true
console.log(isAdult(15)); // false



//section 21
//scope =The location where you declare a variable determines where you can use it.
function help(){
    let msg ="hi i need help!";  //variable declared inside function
    console.log(msg);
}
help();  //works
console.log(msg); //msg is not defined 

let x=10;   //variable declared outide the function its a global variable
function test(){
    console.log(x);  //can acces it
}
test();


//scope with let ,const,var(var dont respect the block scope)
if (true){
    let age=22;
}
console.log(age); // cant acces it

//block scope  =code inside {} like if,for ,while cannot access outside
let raduis=8;
if (radius>0){
    const PI=3.14;
    let circ=2*PI*radius;
}
console.log(radius) //8
console.log(PI)   //cant access
console.log(circ)  //cant access


// function scope vs block scope
function test(){
    let x=10;
}
//belongs to the function
if(true){
    let x=20;
}
//belongs to the if block


//lexical scope
// the inner function can acces the variabels in outer function but not viceversa
function outer(){
    let hero="superman";
    function inner(){
        console.log(hero);
    }
    inner();  
}
outer();//superman

function outer(){
    function inner(){
        let secret="nothing";
    }
    console.log(secret);  //cant access becouse outer function cannot acces variables in inner function
}

//function expression=we can store the funcitions inside a varible
function squae(x){
    return x*x;
}
//using function expression
const square=function(x){
    return x*x;
};
square(10);

//higher order functions
//the functions can accept other functions as arguments and can return a funciton
function callTwice(){
    func();
    func();
}
function rollDie(){
    const roll=Math.floor(Math,random()*6)+1;
    console.log(roll);
}
callTwice(rollDie)  //we call the roll die in callTwice 
//not callTwice(rollDie())


//methods
//a function stored as a property is called as a method
const math = {
    multiply(x, y) {
        return x * y;
    },
    divide(x, y) {
        return x / y;
    }
};
math.multiply(5, 3);   // 15
math.divide(10, 2);    // 5

//THIS keyword
//When a function is called as an object method, this generally refers to the object that called the method
const person = {
    first: "Robert",
    last: "Herjavec",
    fullName(){
        return `${this.first}${this.last}`
    }
};
person.fullName();  //Robert Herjavec

//try and catch=The	program	can	handle	the	error	instead	of	simply	crashing
try{
    hello.toUpperCase();
}catch{
    console.log("Error!!!");
}

//try/catch with error object
try{
    hello.toUpperCase();
}catch(err){
    console.log(err);
    console.log(err.message)
}

//section 22-callbacks and array methods


