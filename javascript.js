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



//--------Singleround of rock paper scissors-------------

function singleround() {
    const playerSelection = "ROCK";
    const computerSelection = computerPlay();
    let playerSelectionMod = playerSelection.toLowerCase();
    let playerResult = playerSelectionMod.charAt(0).toUpperCase() + playerSelectionMod.slice(1);

    if (playerResult === computerSelection) {
        return "It is a Draw"
    }

    // if player uses Rock, results:

    else if (playerResult === "Rock" && computerSelection === "Scissors") {
        return "Player Wins"
    }

    else if (playerResult === "Rock" && computerSelection === "Paper") {
        return "Computer Wins"
    }

    // if player uses Paper, results:

    else if (playerResult === "Paper" && computerSelection === "Rock") {
        return "Player Wins"
    }

    else if (playerResult === "Paper" && computerSelection === "Scissors") {
        return "Computer Wins"
    }

    // if player uses Scissors, results:

    else if (playerResult === "Scissors" && computerSelection === "Paper") {
        return "Player Wins"
    }

    else if (playerResult === "Scissors" && computerSelection === "Rock") {
        return "Computer Wins"
    }
}


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

// ---------Five rounds of Rock Paper Scissors---------

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