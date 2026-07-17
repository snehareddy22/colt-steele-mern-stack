let input=prompt("what would you like to do");
list=[]
while(input!=='q'){ 
    input=prompt("what would you like to do");
    if (input==='new'){
        const add=prompt("enter new todo");
        list.push(add)
    }
    else if(input==='delete'){
        const index=prompt("enter index")
        list.splice(index,1)
    }
    else if(input==='list'){
        console.log("***********************************")
        list.forEach((value,index) => {
            console.log(`Index: ${index}, Value: ${value}`);
        });
        console.log("***********************************")
    }
    Console.log("you have quitted")
}

