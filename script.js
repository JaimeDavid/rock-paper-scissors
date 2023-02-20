// returns a random input from 1 to 3 and assings rock, paper or Scissors.
function getComputerChoice(){
    let choice = Math.floor(Math.random()*3) + 1;

    if(choice === 1){
        return "Rock";
    }else if(choice === 2){
        return "Paper";
    }else{
        return "Scissors";
    }
}
// checks the player selection and computer selection and returns a winner, loser or draw accoding to each case.
function playRound(playerSelection, computerSelection){
    if (playerSelection === "Rock" && computerSelection === "Paper" ){
        console.log("Paper beats rock");
        return "Computer wins";

    }else if(playerSelection === "Rock" && computerSelection === "Scissors"){
        console.log("Rock beats Scissors");
        return "Player wins";

    }else if(playerSelection === "Rock" && computerSelection === "Rock"){
        console.log("Same choice means draw");
        return "Draw";

    }else if (playerSelection === "Scissors" && computerSelection === "Scissors"){
        console.log("Same choice means draw");
        return"Draw";

    }else if (playerSelection === "Scissors" && computerSelection === "Rock"){
        console.log("Rock beats Scissors");
        return "Computer wins";

    }else if (playerSelection === "Scissors" && computerSelection === "Paper"){
        console.log("Scissors beats Paper");
        return "Player wins";

    }else if (playerSelection === "Paper" && computerSelection === "Rock"){
        console.log("Paper beats Rock");
        return "Player wins";

    }else if (playerSelection === "Paper" && computerSelection === "Scissors"){
        console.log("Scissors beats Paper");
        return "Computer wins";

    }else if( playerSelection === "Paper" && computerSelection === "Paper"){
        console.log("Same choice means draw");
        return "Draw";

    }

}

// prompts the user for input and checks if it is valid, returns error or valid choice
function getPlayerChoice(){
    let playerInput = prompt("Please choose Rock, Paper or Scissors");
    let choice = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();
        if (choice !== "Rock" && choice !== "Paper" && choice !== "Scissors"){
            console.log("Please provide a valid choice");
            return "Error";

        }else{
             
            return choice;

        }
}

//runs 5 rounds totals the score of each player and returns a winner
function game(){
    let result;
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0 ; i < 5; i++){
         let playerChoice = getPlayerChoice();
         let computerChoice = getComputerChoice();
         if (playerChoice === "Error"){
            continue;
         }else{
            result = playRound(playerChoice, computerChoice);
            if (result === "Player wins"){
                playerScore +=1;
            }else if( result === "Computer wins"){
                computerScore +=1;
            }else{
                continue;
            }

         }
         console.log("Player scores is "+playerScore+" Computer score is "+computerScore);
         
    }

    if (playerScore < computerScore){        
        return "Computer wins"
    }else if (playerScore > computerScore){        
        return "Player wins"
    }else{        
        return "Draw"
    }
    
}

console.log(game());



