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

for (let i=1;i<=20;i++){
    console.log(i)
}
for (let i=20;i>=1;i--){
    console.log(i)
}
for (let i=2;i<=50;i+=2){
    console.log(i)
}
for (let i=1;i<=25;i+=2){
    console.log(i)
}

for (let i=1;i<=10;i++){
        console.log(`7 * ${i} = ${ 7*i}`)
    }


let total=0
for (let i=1;i<=100;i++){
    total+=i
}
    console.log(total);



for (let i=1;i<=50;i++){
    if (i===31){
        break;
    }
    console.log(i);
}


let pattern="";
for (let i=1;i<=5;i++){
    pattern+="*";
    console.log(pattern)
    }

#hard
for (let i=1;i<=50;i++){
    if (i%3==0 && i%5==0){
        console.log("FizzBuzz");
    }
    else if (i%3==0){
        console.log("Fizz");
    }
    else if (i%5==0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
   
}