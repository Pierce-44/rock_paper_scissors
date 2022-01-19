
let playerScore = 0;
let computerScore = 0;
let playerSelection = " ";
let hideBTN = playAgain.style.visibility = 'hidden';


const buttons = document.querySelectorAll('.buttons');
buttons.forEach((button) => {
    button.addEventListener('click', singleround);
    button.addEventListener('click', terminate);
});

const playAgainBTN = document.querySelector('#playAgain');
playAgainBTN.addEventListener('click', activate);


document.getElementById('rock').onclick = function() {
    playerSelection = "Rock";
};
document.getElementById('paper').onclick = function() {
    playerSelection = "Paper";
};
document.getElementById('scissors').onclick = function() {
    playerSelection = "Scissors";
};


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
        return "Congradulations you WIN! Click here to play again!";
    };
    if (computerScore === 5 && computerScore > playerScore) {
        return "Unlucky the computer WINS! Click here to play again!";
    };
};


function terminate() {
    if (playerScore === 5 || computerScore === 5) {
        document.getElementById('rock').disabled = true;
        document.getElementById('paper').disabled = true;
        document.getElementById('scissors').disabled = true;
        hideBTN = playAgain.style.visibility = 'visible';
        document.getElementById("playAgain").innerText = winner();
    };
};


function activate() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById("playerResults").innerHTML = "Player Score" + " " + playerScore;
    document.getElementById("computerResults").innerHTML = "Computer Score" + " " + computerScore;
    if (playAgain.style.visibility = 'visible') {
        document.getElementById('rock').disabled = false;
        document.getElementById('paper').disabled = false;
        document.getElementById('scissors').disabled = false;
        hideBTN = playAgain.style.visibility = 'hidden';
    };
};


function singleround() {
    const computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
        document.getElementById("playerResults").innerHTML = "Player Score" + " " + playerScore;
        document.getElementById("computerResults").innerHTML = "Computer Score" + " " + computerScore;
    }

    else if (playerSelection === "Rock" && computerSelection === "Scissors" || playerSelection === "Paper" && computerSelection === "Rock" || playerSelection === "Scissors" && computerSelection === "Paper") {
        ++playerScore;
        document.getElementById("playerResults").innerHTML = "Player Score" + " " + playerScore;
        document.getElementById("computerResults").innerHTML = "Computer Score" + " " + computerScore;
    }

    else if (playerSelection === "Rock" && computerSelection === "Paper" || playerSelection === "Paper" && computerSelection === "Scissors" || playerSelection === "Scissors" && computerSelection === "Rock") {
        ++computerScore;
        document.getElementById("playerResults").innerHTML = "Player Score" + " " + playerScore;
        document.getElementById("computerResults").innerHTML = "Computer Score" + " " + computerScore;
    };
};













// 

/*  5 Round Game Plan:
    ------------------
    1) round1 
    2) round1result = "player wins" (for this example)
    3) if round1result === "player wins" add 1 point to player score
    4) if round1result === "computer wins" add 1 point to computer score
    5) if round1result === "draw" add no points
    6) repeat for rounds 2-5
    7) annonce winner 
      if playerscore === 5 
      notice Winner
      if computerscore === 5 
      notice winner 
*/

/* ---------Five rounds of Rock Paper Scissors---------

function game() {
    let playerScore = 0
    let computerScore = 0
    const round1 = singleround();
    const round2 = singleround();
    const round3 = singleround();
    const round4 = singleround();
    const round5 = singleround();

    // rounnd 1 results
    if (round1 === "Player Wins") {
        ++playerScore;
    }
    if (round1 === "Computer Wins") {
        ++computerScore
    }

    // round 2 results
    if (round2 === "Player Wins") {
        ++playerScore;
    }
    if (round2 === "Computer Wins") {
        ++computerScore
    }

    // round 3 results
    if (round3 === "Player Wins") {
        ++playerScore;
    }
    if (round3 === "Computer Wins") {
        ++computerScore
    }
    
    //round 4 results
    if (round4 === "Player Wins") {
        ++playerScore;
    }
    if (round4 === "Computer Wins") {
        ++computerScore
    }

    // round 5 results
    if (round5 === "Player Wins") {
        ++playerScore;
    }
    if (round5 === "Computer Wins") {
        ++computerScore
    }

    console.log(playerScore)
    console.log(computerScore)

    // announcement of the winner
    if (playerScore === computerScore) {
        return "That is a Draw"
    }
    if (playerScore > computerScore) {
        return "Player wins the round of 5"
    }
    if (playerScore < computerScore) {
        return "Computer wins the round of 5"
    }
}


console.log(game())


1) Click button
2) Return button value
3) Imput button value into round fucntion
4) Return the winner and and tally points
5) Stop when the first player gets to 5 points
6) Announce the winner












*/