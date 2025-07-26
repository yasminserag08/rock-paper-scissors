const options = ['rock', 'paper', 'scissors'];

let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties:0
};

window.onload = displayScore();

// Computer player
function computerPick() {
  // Pick a random option 
  let randomIndex = Math.floor(Math.random() * options.length);
  let pick = options[randomIndex];

  return pick;
}

// Score displayer 
function displayScore() {
  document.getElementById("wins").innerHTML = `Wins: ${score.wins}`;
  document.getElementById("losses").innerHTML = `Losses: ${score.losses}`;
  document.getElementById("ties").innerHTML = `Ties: ${score.ties}`;
}

// Reset score
function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
}

// Main function
function playGame(playerPick) {
  let win; let loss; let tie;

  let computerMove = computerPick();
  if (playerPick === computerMove) {
    score.ties += 1;
    tie = true;
  }

  // Win cases
  else if (playerPick === 'rock' && computerMove === 'scissors') {
    score.wins += 1;
    win = true;
  }

  else if (playerPick === 'scissors' && computerMove === 'paper') {
    score.wins += 1;
    win = true;
  }

  else if (playerPick === 'paper' && computerMove === 'rock') {
    score.wins += 1; 
    win = true;
  }

  // If not a tie or a win case, computer wins
  else {
    score.losses += 1;
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

  localStorage.setItem('score', JSON.stringify(score));

  document.getElementById("playerPick").innerHTML = 'You';
  document.getElementById("playerPick-image").src = `./assets/${playerPick}-emoji.png`;
  document.getElementById("playerPick-image").style = 'height: 50px; width: 50px;'
  document.getElementById("computerPick").innerHTML = 'Computer';
  document.getElementById("computerPick-image").src= `./assets/${computerMove}-emoji.png`;
  document.getElementById("computerPick-image").style = 'height: 50px; width: 50px;'

  // Update score 
  displayScore();
}


