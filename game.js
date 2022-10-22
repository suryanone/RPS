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

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "paper" && computerSelection === "scissors") {
    alert("You lose! scissors beat paper");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    alert("You win! paper beat rock");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    alert("You lose! paper beat rock");
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    alert("You win! rock beat scissors");
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    alert("You lose! rock beat scissors");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    alert("You win! scissors beat paper");
  } else {
    alert("It's a tie");
  }
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
