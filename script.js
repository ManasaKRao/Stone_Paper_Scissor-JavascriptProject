const totalscores = { computerScore: 0, playerScore: 0 };

function getComputerChoice() {
  const rpsChoice = ['Rock', 'Paper', 'Scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return rpsChoice[randomNumber];
}

function getResult(playerChoice, computerChoice) {
  let score;
  if (playerChoice == computerChoice) {
    score = 0; // match tie
  } else if (
    (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
    (playerChoice === 'Paper' && computerChoice === 'Rock') ||
    (playerChoice === 'Scissors' && computerChoice === 'Paper')
  ) {
    score = 1; // human wins
  } else {
    score = -1; // human loses
  }
  return score;
}

function showResult(score, playerChoice, computerChoice) {
  const resultDiv = document.getElementById('result');
  const handsDiv = document.getElementById('hands');
  const playerScoreDiv = document.getElementById('player-score');

  if (score === -1) {
    resultDiv.innerText = 'You Lose!';
  } else if (score === 0) {
    resultDiv.innerText = "It's a Tie!";
  } else {
    resultDiv.innerText = 'You Won!';
  }

  //handsDiv.innerText = `:person ${playerChoice} vs :robot ${computerChoice}`;
  handsDiv.innerText = ` ${playerChoice}🧑 vs  ${computerChoice}🤖`;

  playerScoreDiv.innerText = `Your Score: ${totalscores['playerScore']}`;
}

function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice();
  const score = getResult(playerChoice, computerChoice);
  totalscores['playerScore'] += score;
  showResult(score, playerChoice, computerChoice);
}

function playGame() {
  const rpsButtons = document.querySelectorAll('.rpsButton');
  rpsButtons.forEach(rpsButton => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value);
  });
  const endGameButton=document.getElementById('endGameButton')
  endGameButton.onclick = () => endGame(totalscores)
}

function endGame(totalscores) {
  // Code to clear text on the DOM if needed
  totalscores['playerScore']=0
  totalscores['computerScore']=0
  const resultDiv = document.getElementById('result');
  const handsDiv = document.getElementById('hands');
  const playerScoreDiv = document.getElementById('player-score');
  resultDiv.innerText=''
  handsDiv.innerText=''
  playerScoreDiv.innerText=''




}

playGame();
