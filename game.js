function getComputerChoice() {
  const computerChoice = ["paper", "scissors", "rock"];
  const randomChoice = Math.floor(Math.random() * computerChoice.length);
  console.log(computerChoice[randomChoice]);
  return computerChoice[randomChoice];
}

function getPlayerChoice() {
  let playerInput = prompt(
    "whats your choice (paper/scissors/rock): ",
    "paper"
  );
  return playerInput;
}

let playerScoreTotal = 0;
let computerScoreTotal = 0;
function playRound(
  playerSelection,
  computerSelection,
  playerScore,
  computerScore
) {
  // for (i = 0; i < 5; i++) {

  if (playerSelection === "paper" && computerSelection === "scissors") {
    alert("You lose! scissors beat paper");
    computerScore = 1;
    computerScoreTotal += computerScore;
    // return computer, computerScore;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    alert("You win! paper beat rock");
    playerScore = 1;
    playerScoreTotal += playerScore;
    // return player, playerScore;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    alert("You lose! paper beat rock");
    computerScore = 1;
    computerScoreTotal += computerScore;
    // return computer, computerScore;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    alert("You win! rock beat scissors");
    playerScore = 1;
    playerScoreTotal += playerScore;
    // return player, playerScore;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    alert("You lose! rock beat scissors");
    computerScore = 1;
    computerScoreTotal += computerScore;
    // return computer, computerScore;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    alert("You win! scissors beat paper");
    playerScore = 1;
    playerScoreTotal += playerScore;
    // return player, playerScore;
  } else {
    alert("It's a tie");
  }
  alert(
    "playerScore: " +
      playerScoreTotal +
      "\ncomputerScore: " +
      computerScoreTotal
  );
  return playerScore, computerScore;
}

// const playerSelection = getPlayerChoice();
// const computerSelection = getComputerChoice();
// console.log(
//   playRound(
//     playerSelection,
//     computerSelection,
//     playRound.player,
//     playRound.computer
//   )
// );

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (i = 0; i < 3; i++) {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    let play = playRound(
      playerSelection,
      computerSelection,
      playerScore,
      computerScore
    );

    // console.log(play);
  }
}

game();
