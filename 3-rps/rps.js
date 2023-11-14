/* 
    getComputerChoice ->
    0 = rock
    1 = paper
    2 = scissors
*/ 

function getComputerChoice(){
    return(Math.floor(Math.random() * 3))
}

function play(playerSelection, computerSelection){
    
}

console.log(getComputerChoice());