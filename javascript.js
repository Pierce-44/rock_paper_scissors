
let playerScore = 0;
let computerScore = 0;
let playerSelection = " ";
let hideBTN = playAgain.style.visibility = 'visible';
document.getElementById("playAgain").innerHTML = "click an image, Vamos nessa!";

document.getElementById('rock').onclick = function() {
    const transform = document.querySelector('#rockqs');
    transform.classList.add('playing');
    playerSelection = "Rock";
};
document.getElementById('paper').onclick = function() {
    const transform = document.querySelector('#paperqs');
    transform.classList.add('playing');
    playerSelection = "Paper";
};
document.getElementById('scissors').onclick = function() {
    const transform = document.querySelector('#scissorsqs');
    transform.classList.add('playing');
    playerSelection = "Scissors";
};


let buttons = document.querySelectorAll('.buttons');
buttons.forEach((button) => {
    button.addEventListener('click', singleround);
    button.addEventListener('click', terminate);
});

const playAgainBTN = document.querySelector('#playAgain');
playAgainBTN.addEventListener('click', () => {
    activate ();
});





function computerPlay() {
    const options = ["Rock", "Paper", "Scissors"];
    const selection = Math.floor(Math.random() * options.length);
    if (selection === 0) {
        return "Rock"
    }
    else if (selection === 1) {
        return "Paper"
    }
    else 
        return "Scissors"
    }


function winner() {
    if (playerScore === 5 && playerScore > computerScore) {
        document.getElementById("playAgain").style.backgroundColor = "rgb(0, 255, 21)";
        return "Congradulations you WIN! Click here to play again!";
    };
    if (computerScore === 5 && computerScore > playerScore) {
        document.getElementById("playAgain").style.backgroundColor = "rgb(255, 25, 25)";
        return "game over computer WINS! Click here to play again!";
    };
};


function terminate() {
    if (playerScore === 5 || computerScore === 5) {
        document.getElementById('rock').style.pointerEvents = "none";
        document.getElementById('paper').style.pointerEvents = "none";
        document.getElementById('scissors').style.pointerEvents = "none";
        hideBTN = playAgain.style.visibility = 'visible';
        document.getElementById("playAgain").innerHTML = winner();
    };
};


function activate() {
    if (playerScore === 5 || computerScore === 5) {
        playerScore = 0;
        computerScore = 0;
        document.getElementById("playerResults").innerHTML = "Player Score" + " " + playerScore;
        document.getElementById("computerResults").innerHTML = "Computer Score" + " " + computerScore;
        document.getElementById('rock').style.pointerEvents = "auto";
        document.getElementById('paper').style.pointerEvents = "auto";
        document.getElementById('scissors').style.pointerEvents = "auto";
        document.getElementById("playAgain").style.backgroundColor = "rgb(0, 153, 255)";
        document.getElementById("playAgain").innerHTML = "click an image, Vamos nessa!";
        document.getElementById("computerResults").style.color = "white";
        document.getElementById("playerResults").style.color = "white";
    };
};


function singleround() {
    console.log(playerSelection)
    const computerSelection = computerPlay();
    const test = document.querySelector('#playAgain');
    test.classList.add('playing');
    
    if (playerSelection === computerSelection) {
        document.getElementById("playerResults").innerHTML = "Player Score" + " " + playerScore;
        document.getElementById("computerResults").innerHTML = "Computer Score" + " " + computerScore;
        document.getElementById("playAgain").innerHTML = "no points for either, computer also played " + computerSelection;
        document.getElementById("playerResults").style.color = "rgb(255, 136, 0)";
        document.getElementById("computerResults").style.color = "rgb(255, 136, 0)";
    }

    else if (playerSelection === "Rock" && computerSelection === "Scissors" || playerSelection === "Paper" && computerSelection === "Rock" || playerSelection === "Scissors" && computerSelection === "Paper") {
        ++playerScore;
        document.getElementById("playerResults").innerHTML = "Player Score" + " " + playerScore;
        document.getElementById("computerResults").innerHTML = "Computer Score" + " " + computerScore;
        document.getElementById("playAgain").innerHTML = "You win a point, computer played " + computerSelection;
        document.getElementById("playerResults").style.color = "rgb(0, 255, 21)";
        document.getElementById("computerResults").style.color = "white";
    }

    else if (playerSelection === "Rock" && computerSelection === "Paper" || playerSelection === "Paper" && computerSelection === "Scissors" || playerSelection === "Scissors" && computerSelection === "Rock") {
        ++computerScore;
        document.getElementById("playerResults").innerHTML = "Player Score" + " " + playerScore;
        document.getElementById("computerResults").innerHTML = "Computer Score" + " " + computerScore;
        document.getElementById("playAgain").innerHTML = "the computer wins a point, computer played " + computerSelection;
        document.getElementById("playerResults").style.color = "white";
        document.getElementById("computerResults").style.color = "rgb(0, 255, 21)";
    }
};


const playAgainQS = document.querySelector('#playAgain');
playAgainQS.addEventListener('transitionend', removeTransition);

const rockQS = document.querySelector('#rockqs');
rockQS.addEventListener('transitionend', removeTransition);
const paperQS = document.querySelector('#paperqs');
paperQS.addEventListener('transitionend', removeTransition);
const scissorsQS = document.querySelector('#scissorsqs');
scissorsQS.addEventListener('transitionend', removeTransition);

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    playAgainQS.classList.remove('playing');
    rockQS.classList.remove('playing');
    paperQS.classList.remove('playing');
    scissorsQS.classList.remove('playing');
};