////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return
    if (move) === true) {
    return move;
    } else {
        move =getInput();
    }
    return getPlayerMove;
}
function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return
    if (move === true) {
        return move;
    } else (move = randomPlay){
        return getComputerMove;
    }
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
   if ((playerMove === 'rock' && computerMove === 'scissors') ||
        (playerMove === 'scissors' && computerMove === 'paper') ||
        (playerMove === 'paper' && computerMove === 'rock')) {
        winner = 'computer';
   } else if (playerMove === computerMove) {
    winner = 'tie';
   } else {winner = 'computer';
}

return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
   var RD_Winner;

   while (playerWins < 5 && computerWins < 5) {
        RD_Winner = getWinner(getPlayerMove()), getComputerMove());
    if (RD_Winner === 'player') {
        playerWins;
    }
    else if (RD_Winner === 'computer') {
        computerWins;
    }
    else {
        console.log ('tie');

    }
    console.log ('PLayer' + playerWins + '   ' + 'Computer' + computerWins)

   }

    return [playerWins, computerWins];
}
