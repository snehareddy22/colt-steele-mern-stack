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


// A Promise is made-pending
// Reject-.catch-.finally
// Resolve-.then-.then-.finally

// . Relationship between time and work
// . Promise chaining
// · Error handling
// . The .finally handler

let stocks = {
Fruits : ["strawberry", "grapes", "banana","apple"],
liquid : ["water", "ice"],
holder : ["cone", "cup", "stick"],
toppings : ["chocolate", "peanuts"],
};
let is_shop_open=true;

let order=(time,work)=>{
  return new Promise( (resolve,reject)=>{
    if (is_shop_open){
      setTimeout( ()=>{
        resolve( work() )
    },time)  
    }else{
      reject(console.log("our shop is closed"));
    }
  });
};
order(2000,()=>console.log(`${stocks.Fruits[0]} was selected`))
.then(()=>{
  return order(0000,()=>console.log("production has started"))
})
.then(()=>{
  return order(2000,()=>console.log("the fruit was chopped"))
})
.then(()=>{
  return order(1000,()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} are selected`))
})
.then(()=>{
  return order(1000,()=>console.log("the machine has started"))
})
.then(()=>{
  return order(2000,()=>console.log(`${stocks.holder[0]} was selected`))
})
.then(()=>{
  return order(3000,()=>console.log(`${stocks.toppings[0]} was selected`))
})
.then(()=>{
  return order(1000,()=>console.log("the ice cream was served"))
})
  
.catch(()=>{
  console.log("customer left")
})
.finally(()=>{
  console.log("shop is closed")
});


//async
async function order(){
  try{
    await abc;
  }
  catch(error){
    console.log("abc doesn't exist",error)
  }
  finally{
    console.log("run code anyways")
  }
}
order()
.then(()=>{
  console.log("hfhdwhfdsh")
})


//await
let toppings_choice=()=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(console.log("which topping do you want?"));
    },3000);
  });
};
async function kitchen (){
  console.log("A")
  console.log("B")
  console.log("C")
  await toppings_choice()
  console.log("D")
  console.log("E")
}
kitchen()
console.log("doing the dishes")
console.log("cleaning the dishes")
console.log("taking others orders")


//full code 
let stocks = {
Fruits : ["strawberry", "grapes", "banana","apple"],
liquid : ["water", "ice"],
holder : ["cone", "cup", "stick"],
toppings : ["chocolate", "peanuts"],
};
let is_shop_open=true;

function time(ms) {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(resolve,ms);
    } else {
      reject(console.log("shop is closed"));
    }
  });
}
async function kitchen (){
  try{
    await time(2000);
    console.log(`${stocks.Fruits[0]} was selected`);

    await time(0000);
    console.log("start the production");

    await time(2000);
    console.log("cut the fruits");

    await time(1000);
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were added`);

    await time(1000);
    console.log("machine has started");

    await time(2000);
    console.log(`ice creame is placed on ${stocks.holder[0]}`);

    await time(3000);
    console.log(`${stocks.toppings[0]} is selected for toppings`);

    await time(2000);
    console.log("ice cream is served");
    
  }
  catch(error){
    console.log("customer left shop",error);
  }
    
  finally{
    console.log("day ended shop is closed");
  }
}
kitchen();
