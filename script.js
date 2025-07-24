const options = ['rock', 'paper', 'scissors'];
let wins = 0;
let losses = 0;
let ties = 0;
window.onload = displayScore();

// Computer player
function computerPick() {
  // Pick a random option 
  let randomIndex = Math.floor(Math.random() * options.length);
  let pick = options[randomIndex];

  return pick;
}

// Scores displayer 
function displayScore() {
  document.getElementById("wins").innerHTML = `Wins: ${wins}`;
  document.getElementById("losses").innerHTML = `Losses: ${losses}`;
  document.getElementById("ties").innerHTML = `Ties: ${ties}`;
}

// Reset score
function resetScore() {
  wins = 0;
  losses = 0;
  ties = 0;
  displayScore();
}

// Main function
function playGame(playerPick) {
  let win; let loss; let tie;

  let computerMove = computerPick();
  if (playerPick === computerMove) {
    ties++;
    tie = true;
  }

  // Win cases
  else if (playerPick === 'rock' && computerMove === 'scissors') {
    wins++;
    win = true;
  }

  else if (playerPick === 'scissors' && computerMove === 'paper') {
    wins++;
    win = true;
  }

  else if (playerPick === 'paper' && computerMove === 'rock') {
    wins++; 
    win = true;
  }

  // If not a tie or a win case, computer wins
  else {
    losses++;
    loss = true;
  }

  // Show result 
  if (win) {
    document.getElementById("game-result").innerHTML = 'You win.';
  }

  else if (loss) {
    document.getElementById("game-result").innerHTML = 'You lose.';
  }

  else {
    document.getElementById("game-result").innerHTML = 'Tie.'
  }

  document.getElementById("playerPick").innerHTML = 'You';
  document.getElementById("playerPick-image").src = `./assets/${playerPick}-emoji.png`;
  document.getElementById("playerPick-image").style = 'height: 50px; width: 50px;'
  document.getElementById("computerPick").innerHTML = 'Computer';
  document.getElementById("computerPick-image").src= `./assets/${computerMove}-emoji.png`;
  document.getElementById("computerPick-image").style = 'height: 50px; width: 50px;'

  // Update score 
  displayScore();
}


