import randomInteger from "random-int";
import promptSync from "prompt-sync";

// The available choices
const choices = ["rock", "paper", "scissors"];

const userPrompt = "Please enter 0 for rock, 1 for paper, or 2 scissors. ";
let outcome = "Ready to play.";

// Computer chooses randomly
const computerChoice = randomInteger(0, 2);
const computerChoiceName = choices[computerChoice];

// Prompt the user for an input
const prompt = promptSync();
const userInput = prompt(userPrompt);
const userChoice = choices[userInput];

if (computerChoiceName === userChoice) {
  outcome = "Draw";
} else if (computerChoiceName === "rock" && userChoice === "paper") {
  outcome = "Player Wins";
} else if (computerChoiceName === "rock" && userChoice === "scissors") {
  outcome = "Computer Wins";
} else if (computerChoiceName === "paper" && userChoice === "rock") {
  outcome = "Computer Wins";
} else if (computerChoiceName === "paper" && userChoice === "scissors") {
  outcome = "Player Wins";
} else if (computerChoiceName === "scissors" && userChoice === "rock") {
  outcome = "Player Wins";
} else if (computerChoiceName === "scissors" && userChoice === "paper") {
  outcome = "Computer Wins";
} else {
  outcome = "Invalid entry. Please try again.";
}

console.log("Computer chooses " + computerChoiceName);
console.log("Player chooses " + userChoice);
console.log(outcome);
