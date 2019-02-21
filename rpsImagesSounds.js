playRound = function(playerSelection){
    
    var rpsChoice = ["rock", "paper", "scissors"];
    var computerSelection = rpsChoice[Math.floor(Math.random() * rpsChoice.length)];
    document.getElementById("computerMove").textContent = "Computer selects " + computerSelection;

    document.getElementById("playerMove").textContent = "Player selects " + playerSelection;

    if (playerSelection === computerSelection) {
        document.getElementById("result").textContent = "Tie!";
    }
    else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
        document.getElementById("result").textContent = "Player wins!";
    }
    else {
        document.getElementById("result").textContent = "Computer wins!";
    }
}
function playSound(melody) {
    var snd = new Audio(melody + ".mp3");
    snd.play();
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
    }

    const keys = Array.from(document.querySelectorAll('.key'));
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
    // window.addEventListener('keydown', playSound);

function mark(el) {
    el.style.border = "1px solid red";
}