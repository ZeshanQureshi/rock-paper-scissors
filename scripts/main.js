let gameWon = 0;

let computerWins = 0;
let playerWins = 0;

function computerPlay() {
    let computerChoices = ["ROCK", "PAPER", "SCISSORS"];
    return computerChoices[Math.floor(Math.random()*3)];
}

function playRound() {
    let computerMove = computerPlay();
    let playerInput = window.prompt("Move?");

    let playerMove = playerInput.toUpperCase();

    if (computerMove == playerMove) {
        console.log("Tied");
    } else if (computerMove == "ROCK" && playerMove == "SCISSORS" || 
               computerMove == "PAPER" && playerMove == "ROCK" || 
               computerMove == "SCISSORS" && playerMove == "PAPER") {
                   console.log("Computer Wins!");
                   computerWins = ++computerWins;
               } else {
                   console.log("Player Wins!");
                   playerWins = ++ playerWins;
               }

    console.log(computerWins);
    console.log(playerWins);
}

function game() {

    while (gameWon == 0) {
        playRound(playerWins, computerWins);

        if (playerWins == 5) {
            console.log("Player won 5 rounds");
            gameWon = 1;
        } else if (computerWins == 5){
            console.log("Computer won 5 rounds")
            gameWon = 1;
        }
    }
}
    