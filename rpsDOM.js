var score = 0;

function playRound(p, c) {
    /* console.log("Computer selects " + computerSelection); */
    document.getElementById("computerMove").textContent = "Computer selects " + c;
    document.getElementById("playerMove").textContent = "Player selects " + p;

    if (p === c) {
        document.getElementById("result").textContent = "Tie!";
    }
    else if ((p === "rock" && c === "scissors") || (p === "paper" && c === "rock") || (p === "scissors" && c === "paper")) {
        document.getElementById("result").textContent = "Player wins!";
	score++;
    }
    else {
        document.getElementById("result").textContent = "Computer wins!";
	score--;
    }
    document.getElementById("score").textContent = "Score: " + score;
}

var i;
for (i = 0; i < 5; i++) {
    document.getElementById("round").textContent = "Round: " + (i+1);
    var rpsChoice = ["rock", "paper", "scissors"];
    var playerSelection = "";
    do {
        var playerSelection = prompt("rock, paper, scissors?");
    }
    while (!(rpsChoice.includes(playerSelection)));

    var computerSelection = rpsChoice[Math.floor(Math.random() * rpsChoice.length)];

    playRound(playerSelection, computerSelection)
}

if (score === 0) {
    document.getElementById("winner").textContent = "The game was a tie.";
}
else if (score > 0) {
    document.getElementById("winner").textContent = "The  player wins!";
}
else {
    document.getElementById("winner").textContent = "The computer wins!";;
}
   
 
 
