const rockButton = document.querySelector('.js-rock');
const papperButton = document.querySelector('.js-paper');
const scissorButton = document.querySelector('.js-scissor');
const computerM = document.querySelector('.js-computer');
const playerM = document.querySelector('.js-player');
const scoreS = document.querySelector('.js-score');
const resultS = document.querySelector('.js-result');
const restButton = document.querySelector('.js-reset-button');
const resetMessage = document.querySelector('.js-reset-message')

let score = JSON.parse(localStorage.getItem('score')) || {
  tie: 0,
  loose: 0,
  win: 0
};
rockButton.addEventListener('click',()=>{
  playGame('rock');
});
papperButton.addEventListener('click',()=>{
  playGame('paper');
});
scissorButton.addEventListener('click',()=>{
  playGame('scissor')
})



function pickComputerMove (){
  let computerMove = '';
  const randomNumbers = Math.random();
  
  if(randomNumbers > 0 && randomNumbers < 1/3){
    computerMove = 'rock';
  } else if (randomNumbers > 1/3 && randomNumbers < 2/3){
    computerMove = 'paper';
  }else if (randomNumbers >2/3 && randomNumbers < 1){
    computerMove = 'scissor';
  }
  return computerMove;
}



function playGame (playerMove) {

  const computerMove = pickComputerMove();
  let result = '';
    if (playerMove === 'rock'){
        if (computerMove === 'rock'){
          result = 'tie'
        } else if (computerMove === 'paper'){
          result = 'loose'
        } else if (computerMove === 'scissor'){
          result = 'win'
        }
    } else if (playerMove === 'paper'){
        if (computerMove === 'rock'){
          result = 'win'
        } else if (computerMove === 'paper'){
          result = 'tie'
        } else if (computerMove === 'scissor'){
          result = 'loose'
        }
    } else if (playerMove === 'scissor') {
        if (computerMove === 'rock'){
          result = 'loose'
        }else if (computerMove === 'paper'){
          result = 'win'
        } else if (computerMove === 'scissor') {
          result = 'tie'
        }
    }
    
    gameScore(result);
    console.log("Current score:", score);
    playerM.innerHTML = `You picked: ${playerMove}.`
    computerM.innerHTML = `Computer picked: ${computerMove}.`
    resultS.innerHTML = `Result: You ${result}!`
    scoreS.innerHTML = `Ties: ${score.tie}. Loose: ${score.loose}. Win:${score.win}`;


}


function gameScore(result) {
  if (result === 'tie') {
    score.tie++;
  } else if (result === 'loose') {
    score.loose++;
  } else if (result === 'win') {
    score.win++;
  }
  saveToStorage();
}

function saveToStorage(){
  localStorage.setItem('score',JSON.stringify(score))
};
restButton.addEventListener('click', () => {
  score.tie = 0;
  score.loose = 0;
  score.win = 0;
  updateScore();
  resetMessage.innerHTML = 'score is reset'
  
});

function updateScore() {
  scoreS.textContent = 
    `Ties: ${score.tie}  Losses: ${score.loose}  Wins: ${score.win}`;
    saveToStorage();
}