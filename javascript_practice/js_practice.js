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
let radius=8;
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
function callTwice(func){
    func();
    func();
}
function rollDie(){
    const roll=Math.floor(Math.random()*6)+1;
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
        return `${this.first} ${this.last}`;
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
//Instead	of	manually	writing	loops	every	time,	array	methods	let	you	describe	what	you	want	to	do	with	each	element
//callback functions-a callback is a function which is passes into anather function to be called later

function greet(){
    console.log("hi");
}
function callTwice(func){
    func();
    func();
}
callTwice(greet); //passes the function

//FOR EACH
//Runs	a	callback	once	for	every	element	in	an	array.
const nums=[1,2,3,4,5,6,7];
nums.forEach(function(n){
    console.log(n);
});// 1 2 3 4 5 6 7

//arrow function version
nums.forEach(num=>{
    console.log(num);
})

//with objects
const	movies	=	[
    {	title:	"Amadeus",	score:	99	},
    {	title:	"Stand	By	Me",	score:	85	},
    {	title:	"Parasite",	score:	95	}
];
movies.forEach(movie=>{
    console.log(`${movie.title}-${movie.score}`);
});

//MAP
//create a new array by running a callback on evry element
const nums=[1,2,3,4];
const doubles=nums.map(num=>{
    return num*2;   //[2,4,6,8]
});

//with strings
const text=	["rofl",	"lol",	"omg",	"ttyl"];
const caps=text.map(texts=>texts.toUpperCase());
//	["ROFL",	"LOL",	"OMG",	"TTYL"]

//with objects
const	movies	=	[
    {	title:	"Amadeus",	score:	99	},
    {	title:	"Stand	By	Me",	score:	85	},
    {	title:	"Parasite",	score:	95	}
];
const newMovies=movies.map(movie=>{
    return `${movie.title}-${movie.score/10}`;
})
//	["Amadeus-9.9","Stand By Me	-8.5","Parasite	-9.5"]

//ARROW FUNCITONS
const square=function(x){  //normal function
    return x*x;
}

const square2=x=>{  //one parameter
    return x*x;
}

const multi=(a,b)=>{  //two parameter
    return a*b;
}

//IMPLICIT RETURN  -can reduce lines
//	Instead	of:
const isEven	=	(num)	=>	{
    return num%2===0;
};
//	Write:
const isEven2=num=>num%2===	0;
//	eg 2
const	square4	=	num	=>	num	*	num

//FILTER-Creates a new array containing only the elements that	pass a test.
//a callback must return true or false
const numbers=[1,2,3,4,5];
const evennum=numbers.filter(num=>{
    return num%2==0;
});   //[2,4]
//movie eg
const goodMovies=movies.filter(movie=>movie.score>80);
const badMovies	=movies.filter(movie=>movie.score<70);


//SOME-Does at	least ONE element pass the test? Returns a Boolean.
const exams=[80,90,85,75,77,98];
exams.some(score=> score>=80);  //true

const words=["dog",	"jello","log","cupcake"];
words.some(word=>word.length>4);  //true

//EVERY-do all the lement pass the test
const exams = [80,90,85,75,77,98];
exams.every(score => score >= 85);

//FIND-find and returns the first element that pass the test
const numbers=[1,2,3,4,5];
const results=numbers.find(number=>number>=0); //1

//REDUCE-Runs a reducer function over the array	and	produces one final value.
const prices=[9,22,99,40,100,4,35];
//using loops
let total=0;
for (let price of prices){
    total+=price;
}
//with reduce
const total2=prices.reduce((total,price)=>{
    return total+price;
},0);//0 is initial value
//accumulator:total-the value being built up
//current value:price-the current array elment
 //reduce for min
 const minPrice=prices.reduce((min,price)=>{
    if (price<min){
        return price
    }
    return min;
 });

//movie example
const	movies2	=	[
    {	title:	"A",	score:	80	},
    {	title:	"B",	score:	95	},
    {	title:	"C",	score:	88	}
];
const bestMovie=movies2.reduce((bestMovie,current)=>{
    if (current.score>bestMovie.score){
        return current;
    }
    return bestMovie;
});

//providing an initial value
const evens=[2,4,6,8];
const results=evens.reduce((sum,num)=>sum+num,100);//120

//SETTIMEOUT()-runs a funciton after a specific delay
setTimeout(()=>{
    console.log("hello");
},3000);  //runs after 3 seconds

//SETINTERVEL-repeatedly runs a function at a specified intervel
const id=setInterval(()=>{
    console.log(math.random());
},2000); //runs approx after evry 2 secs
clearInterval(id); //remember to stop the interval when you're finished

// Callback:	a	function	passed	to	another	function.
// forEach():	runs	callback	once	for	every	element.
// map():	creates	a	new	array	by	transforming	every	element.
// filter():	creates	a	new	array	containing	elements	that	pass	a	test.
// find():	returns	the	first	element	that	passes	a	test.
// some():	returns	true	if	at	least	one	element	passes.
// every():	returns	true	only	if	all	elements	pass.
// reduce():	combines	array	elements	into	one	final	value.
// Arrow	Function:	shorter	function	syntax.
// Implicit	Return:	arrow	function	automatically	returns	an	expression.
// setTimeout():	run	once	after	a	delay.
// setInterval():	run	repeatedly	at	an	interval.
// clearInterval():	stop	an	interval.

//newer js features
//default parameters-gives a parameter a default value when no argument is provided
function rollDie(numSide=6){
    return Math.floor(Math.random()*numSide)+1;
}
rollDie(20); //uses 20 sides
rollDie()//uses 6 sides

//eg 2
function greet(name="guest"){
    return `hello ${name}`;
}
greet("sneha");  //hello sneha
greet();         //hello guest


//SPREAD SYNTAX ... -take the contents of something and spread them out
//spread in concole log
console.log(...nums);	//	1	2	3(each as separate argument)
console.log(nums);		//	[1,	2,	3](as array)

//spread with stribgs
console.log(..."hello"); //h e l l o

//spread with array literals
const cats	=["Blue","Scout","Rocket"];
const dogs	=["Rusty","Wyatt"];
const allPets	=[...cats,	...dogs];
//	["Blue","Scout","Rocket","Rusty","Wyatt"]
//we can add values while spreading
const nums2=[2,3,4];
const newNums=[1,...nums2,5]//[1,2,3,4,5]
//copy an array
const original=[1,2,3];
const copy=[...original]; //new array same elments
//spread with objects
const feline={legs:	4,family:"Felidae"};
const canine={isFurry:true,	family:	"Caninae"};
const catDog={...feline,...canine};
//	{legs:4,family:	"Caninae",	isFurry:true}
//add or overwrite the properties with object spread
const user={name:"sneha",age:22};
const updateduser={...user,age:23};
//{name:"sneha",age:23}



