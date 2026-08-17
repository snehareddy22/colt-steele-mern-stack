const player1=document.querySelector('#player1');
const player2=document.querySelector('#player2');
const p1score=document.querySelector('#p1score');
const p2score=document.querySelector('#p2score');
const reset=document.querySelector('#reset');
const dropdown=document.querySelector('#dropdown');

let p1display=0;
let p2display=0;
let winningscore=3; //becouse once we reached winning score we shoould stop incearing and change color
let isGameOver=false; //becouse we should stop game when we reached the winning point 

player1.addEventListener('click',function(){
    if (isGameOver!=true){
        p1display+=1
        if (p1display==winningscore){
            isGameOver=true
            p1score.classList.add('winner');
            p2score.classList.add('loser');
        }
        p1score.textContent=p1display;
       
    }
})
player2.addEventListener('click',function(){
    if (isGameOver!=true){
        p2display+=1
        if (p2display==winningscore){
            isGameOver=true
            p2score.classList.add('winner');
            p1score.classList.add('loser');
        }
        p2score.textContent=p2display
    }
})
dropdown.addEventListener('change', function() {  //to reset bwhen the sleect is changed
    winningscore = parseInt(this.value);
    resetagain();
})

reset.addEventListener('click',resetagain)

function resetagain(){
    isGameOver=false;
    p1display=0;
    p2display=0;
    p2score.textContent=p1display;
    p1score.textContent=p2display;
    p2score.classList.remove('winner','loser');
    p1score.classList.remove('winner','loser');
}
if (isGameOver){
    if (p1display==winningscore){

    }
}