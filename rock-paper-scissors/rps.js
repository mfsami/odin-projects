// Get computer choice (Math.random method)
// Get player choice input (Prompt)
// Keep track of scores (Global variables = 0)
// Write logic for single round
// Write logic for 5 rounds

playerScore = 0;
cmptScore = 0;

function computerChoice() {
  const words = ["rock", "paper", "scissors"];
  const randomWord = Math.floor(Math.random() * words.length);
  return words[randomWord];
}

function playRound(playerChoice, cmptNum) {
  const plyrChoice = playerChoice;
  const cmptChoice = cmptNum;

  //Player wins

  if (plyrChoice == "rock" && cmptChoice == "scissors") {
    console.log("You chose rock");
    console.log("Cpu chose scissors\n");
    console.log("You Win! Rock beats scissors\n");
    playerScore += 1;
  }

  if (plyrChoice == "paper" && cmptChoice == "rock") {
    console.log("You chose paper");
    console.log("Cpu chose rock\n");
    console.log("You Win! Paper beats rock\n");
    playerScore += 1;
  }

  if (plyrChoice == "scissors" && cmptChoice == "paper") {
    console.log("You chose scissors");
    console.log("Cpu chose paper\n");
    console.log("You Win! Scissors beats paper\n");
  }

  //Computer wins

  if (plyrChoice == "scissors" && cmptChoice == "rock") {
    console.log("You chose scissors");
    console.log("Cpu chose rock\n");
    console.log("You Lose! Rock beats scissors\n");
    cmptScore += 1;
  }

  if (plyrChoice == "rock" && cmptChoice == "paper") {
    console.log("You chose rock");
    console.log("Cpu chose paper\n");
    console.log("You Lose! Paper beats rock\n");
    cmptScore += 1;
  }

  if (plyrChoice == "paper" && cmptChoice == "scissors") {
    console.log("You chose paper");
    console.log("Cpu chose scissors\n");
    console.log("You Lose! Scissors beats paper\n");
    cmptScore += 1;
  }

  // Draw

  if (plyrChoice == cmptChoice) {
    console.log("Both players have the same choice");
    console.log("Draw! No points given\n");
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    // Player choice
    const playerChoice = prompt("Choose Rock, Paper, or Scissors!");

    // Cmpt choice
    const cmptNum = computerChoice(1, 3);

    playRound(playerChoice, cmptNum);
  }
}

playGame();
