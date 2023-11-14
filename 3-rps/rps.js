/* 
    getComputerChoice() ->
    0 = rock
    1 = paper
    2 = scissors
*/ 

/*
    play() ->
    if rock 
    -> tie when 0
    -> lose when 1
    -> win when 2

    if paper
    -> tie when 1
    -> lose when 2
    -> win when 0

    if scissors
    -> tie when 2
    -> lose when 0
    -> win when 1
*/

function getComputerChoice(){
    //returns a random number from 0 - 2
    return(Math.floor(Math.random() * 3)) 
}

function play(playerSelection, computerSelection){

    switch (playerSelection){
        case 'rock':
            if(computerSelection === 0){
                return("It's a tie")
            }else if(computerSelection === 1){
                compCount += 1;
                return("You Lose")
            }else if(computerSelection === 2){
                playerCount += 1;
                return("You Win")
            }

        case 'paper':
            if(computerSelection === 0){
                playerCount += 1;
                return("You Win")
            }else if(computerSelection === 1){
                return("It's a tie")
            }else if(computerSelection === 2){
                compCount += 1;
                return("You Lose")
            }
            
        case 'scissors':
            if(computerSelection === 0){
                compCount += 1;
                return("You Lose")
            }else if(computerSelection === 1){
                playerCount += 1;
                return("You Win")
            }else if(computerSelection === 2){
                return("It's a tie")
            }

    }
}

function game(rounds){
    for(i = 0; i < rounds; i++){
        let playerChoicePrompt = prompt("Rock, Paper or Scissors", "");
        let playerChoice = playerChoicePrompt.toLowerCase();

        while(playerChoice != "rock" && playerChoice !== "paper" && playerChoice !== "scissors")
        {
            let x = prompt("Invalid play, enter again (rock, paper, scissors):", "");
            let y = x.toLowerCase();
            if(y === "rock" || y === "paper" || y === "scissors"){
            playerChoice = y;
            break;
            }
        }

        console.log(play(playerChoice, getComputerChoice()));
    }
}

function result(){
    return playerCount > compCount ? `Player wins with ${playerCount} rounds.`
        : compCount > playerCount ? `Computer wins with ${compCount} rounds.`
        : `It's a tie with player winning ${playerCount} and computer winning ${compCount}.`;
}

//Round Count Init
let playerCount = 0;
let compCount = 0;

//Round prompt with valid-input loop
let roundChoice = parseInt(prompt("How many rounds do you want to play?",""));
console.log(roundChoice);
while(!Number.isInteger(roundChoice))
{
    console.log(roundChoice);
    x = parseInt(prompt("How many rounds? Numbers only:"));
    console.log(x);
    roundChoice = x;
}

//Round prompt output
console.log(`You are playing total of ${roundChoice} rounds.`);

//Game function call
game(roundChoice);
console.log(result());