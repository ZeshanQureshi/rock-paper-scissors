let gameWon = 0;

let playerWins = 0;
let computerWins = 0;

function computerPlay() {
    let computerChoices = ["ROCK", "PAPER", "SCISSORS"];
    return computerChoices[Math.floor(Math.random()*3)];
}

function playRound(computerMove, playerWins, computerWins) {
    let playerMove = prompt("Move?");
    playerMove = playerMove.toUpperCase;
    let roundResults = " ";

    if (computerMove == playerMove) {
        roundResults = "Tied.";
    } else if (computerMove == "ROCK" && playerMove == "SCISSORS" || 
               computerMove == "PAPER" && playerMove == "ROCK" || 
               computerMove == "SCISSORS" && playerMove == "PAPER") {
                   roundResults = "Computer wins!";
                   computerWins++;
               } else {
                   roundResults = "Player wins!"
                   playerWins++;
               }
    return roundResults;
}

function game(gameWon) {
    while (gameWon == 0) {
        playRound(computerMove, playerWins, computerWins);

        if (playerWins == 5) {
            console.log("Player won 5 rounds");
            gameWon = 1;
        } else if (computerWins == 5){
            console.log("Computer won 5 rounds")
            gameWon = 1;
        }
    }
}
    