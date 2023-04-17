//Assigns randomly computer choice as Rock, Paper or Scissors
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


//Single game round with results.
const draw = "Draw";
const playerWins = "Player wins";
const computerWins = "Computer wins";
const gameOver = "Game over ";
function playRound(playerChoice){
    const computerChoice = getComputerChoice();

    if(
    (playerChoice === "Rock" && computerChoice === "Rock") || 
    (playerChoice === "Paper" && computerChoice === "Paper")|| 
    (playerChoice === "Scissors" && computerChoice === "Scissors")
    ){
        document.querySelector('#running-game-text').textContent = draw;
        

    }else if (
    (playerChoice === "Rock" && computerChoice === "Scissors")||
    (playerChoice === "Scissors" && computerChoice === "Paper")||
    (playerChoice === "Paper" && computerChoice === "Rock")
    ){
        document.querySelector('#running-game-text').textContent = playerWins;
        updateScore(playerWins);
        if(playerScore === 5){
            document.querySelector('#running-game-text').textContent = gameOver + playerWins;
        }

    }else if (
    (playerChoice === "Scissors" && computerChoice  === "Rock")||
    (playerChoice === "Paper" && computerChoice  === "Scissors")||
    (playerChoice === "Rock" && computerChoice === "Paper")
    ){
        document.querySelector('#running-game-text').textContent = computerWins;
        updateScore(computerWins);
        if (computerScore === 5){
            document.querySelector('#running-game-text').textContent = gameOver + computerWins;
        }
    }   
}

// reset data
let playerScore = 0;
let computerScore = 0;
let runningPlayerScore = document.querySelector('#running-player-score');
let runningComputerScore = document.querySelector('#running-computer-score');
function reset(){
    computerScore = 0;
    playerScore = 0;
    runningPlayerScore.textContent = String(playerScore);
    runningComputerScore.textContent = String(computerScore);
}

//update Score
function updateScore(result){
    if (result === playerWins){
        playerScore++
        runningPlayerScore.textContent = String(playerScore);
    }else if(result === computerWins){
        computerScore++
        runningComputerScore.textContent = String(computerScore);
    }

}



const startGame = document.querySelector("#start-game");
startGame.addEventListener('click', ()=>{
   reset();
    
})

const images = document.querySelectorAll('.containers');
let imageInput;
images.forEach((image) => {
    image.addEventListener('click', ()=>{
        playRound(String(image.id));
    });
});



