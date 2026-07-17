let inputmax=parseInt(prompt("enter the maximum number!"));   //take input largest number
while(!inputmax){                                             //if null,nan,undefined value
    inputmax=parseInt(prompt("enter the valid maximum number!"));//ask again
}
const target=Math.floor(Math.random()*inputmax)+1;                //genarte random number upto the input
let guess=prompt("enter your first guess!");         //ask first guess        
let attempt=1;                                                  //this is attempt 1
while (parseInt(guess)!==target){                              //if guess is not equal to out target
    if (guess==='q')break;                                      //if user click q we will exit
    guess=parseInt(guess) ;                                             
    if (guess>target){                                          //if guess is more than target tell its too high
        guess=prompt("Too high!enter a new guess");
        attempt+=1;  
    }
    else if(guess<target){                                                      //if guess is less than target tell its too low
        guess=prompt("Too low!enter a new guess");
        attempt+=1;  
    }else{
        guess=prompt("invalid guess!plz enter a valid number or press q to quit");
    }
}
if(guess=='q'){                                              //when user clicks q show in console ok quitting
    console.log("ok,quitting");
}else{
console.log(`You got it it took you ${attempt}guesses`);    //when user guesses correctly print this
}


