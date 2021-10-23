let gameWon = 0;

let computerWins = 0;
let playerWins = 0;

let Ro = "Rock";
let Pa = "Paper";
let Sc = "Scissors";

function computerPlay() {
    let paragraphComputer = document.getElementById("computerPick");

    let computerChoices = ["Rock", "Paper", "Scissors"];
    let computerDecision = computerChoices[Math.floor(Math.random()*3)];
    
    paragraphComputer.innerHTML = computerDecision;

    return computerChoices;
}

function playRound(buttonClick) {
    let paragraphPlayer = document.getElementById("playerPick");
    paragraphPlayer.innerHTML = buttonClick;

    let computerRun = computerPlay();

    
}
    