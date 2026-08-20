//synchronous means for example if three images has to come it laods one by one
//if we have 10 tasks but  only have one hand so we finish one and do other
//asynchronous means we got 10 tasks and 10 hands so that the all images load simultaneosly

//synchronous
console.log(" i ")

console.log(" eat ")

console.log(" ice cream ")

console.log(" with a ")

console.log(" spoon ")

//asynchronous
console.log(" i ")

console.log(" eat ")

setTimeout(()=>{
  console.log(" ice cream ")
},4000)

console.log(" with a ")

console.log(" spoon ")

//callback
//calling a function inside another function as an argument is called a callback
function one(call_two) {
  console.log("step 1 complete.plese call step 2")
  call_two()
}

function two() {
  console.log("step 2")
}
one(two)
//"step 1 complete.plese call step 2"
//"step 2"






// Time in sec
// #1 Place Order-0
// #2 Cut The Fruit-2
// #3 Add water and ice-1
// #4 start the machine-1
// #5 Select Container-2
// #6 Select Toppings-3
// #7 Serve Ice Cream-2


let stocks = {
Fruits : ["strawberry", "grapes", "banana","apple"],
liquid : ["water", "ice"],
holder : ["cone", "cup", "stick"],
toppings : ["chocolate", "peanuts"],
};
// console.log(stocks.Fruits[2]);



let order=(Fruit_name,call_production) => {
  setTimeout(()=>{
    console.log(`${stocks.Fruits[Fruit_name]} was selected`);
    call_production() //so if we placed it here in the settimeout it is not called until it slected the friut and dont print before selecting the fruit
  },2000);
  // console.log("order placed")
  // call_production()  
};
let production=() => {
  setTimeout(()=>{
    console.log("production has started")
    setTimeout(()=>{
      console.log("the food has been chopped")
      setTimeout(()=>{
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
        setTimeout(()=>{
          console.log ("the machine has started");
          setTimeout(()=>{
            console.log (`${stocks.holder[0]} was selcted`);
            setTimeout(()=>{
              console.log (`${stocks.toppings[1]} is selected`);
              setTimeout(()=>{
                console.log ("ice creame served");
              },2000);
            },3000);
          },2000);
        },1000);
      },1000);
    },2000);
  },0000);
  // console.log("order recieved")
};
order(0,production);
//this is called as callback hell we use promises to avoid this 


