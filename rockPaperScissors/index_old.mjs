import randomInteger from "random-int";
import promptSync from "prompt-sync";

// The available choices
let choices = ["rock", "paper", "scissors"];

// These will be the messages that are shown to the user
let userPrompt = "0 for rock, 1 for paper, or 2 scissors ";
let outcome = "ready to play.";

// Computer chooses randomly
let computerChoice = randomInteger(0, 2);
computerChoice = choices[computerChoice];

// Prompt the user for an input
const prompt = promptSync();
let userInput = prompt(userPrompt);
let userChoice = choices[userInput];

if (computerChoice === userChoice) {
  outcome = "Draw";
} else if (computerChoice === "rock" && userChoice === "paper") {
  outcome = "Player Wins";
} else if (computerChoice === "rock" && userChoice === "scissors") {
  outcome = "Computer Wins";
} else if (computerChoice === "paper" && userChoice === "rock") {
  outcome = "Computer Wins";
} else if (computerChoice === "paper" && userChoice === "scissors") {
  outcome = "Player Wins";
} else if (computerChoice === "scissors" && userChoice === "rock") {
  outcome = "Player Wins";
} else if (computerChoice === "scissors" && userChoice === "paper") {
  outcome = "Computer Wins";
}

console.log("Computer chooses " + computerChoice);
console.log("Player chooses " + userChoice);
console.log(outcome);