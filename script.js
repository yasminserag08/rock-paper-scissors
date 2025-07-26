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
  document.querySelector('#wins').innerHTML = `Wins: ${score.wins}`;
  document.querySelector('#losses').innerHTML = `Losses: ${score.losses}`;
  document.querySelector('#ties').innerHTML = `Ties: ${score.ties}`;
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
    document.querySelector('#game-result').innerHTML = 'You win.';
  }

  else if (loss) {
    document.querySelector('#game-result').innerHTML = 'You lose.';
  }

  else {
    document.querySelector('#game-result').innerHTML = 'Tie.'
  }

  localStorage.setItem('score', JSON.stringify(score));

  document.querySelector('#playerPick').innerHTML = 'You';
  document.querySelector('#playerPick-image').src = `./assets/${playerPick}-emoji.png`;
  document.querySelector('#playerPick-image').style = 'height: 50px; width: 50px;'
  document.querySelector('#computerPick').innerHTML = 'Computer';
  document.querySelector('#computerPick-image').src= `./assets/${computerMove}-emoji.png`;
  document.querySelector('#computerPick-image').style = 'height: 50px; width: 50px;'

  // Update score 
  displayScore();
}


