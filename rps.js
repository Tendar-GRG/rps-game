const rockButton = document.querySelector('.js-rock');
const papperButton = document.querySelector('.js-paper');
const scissorButton = document.querySelector('.js-scissor');
const computerM = document.querySelector('.js-computer');
const playerM = document.querySelector('.js-player');
const scoreS = document.querySelector('.js-score');
const resultS = document.querySelector('.js-result');
const restButton = document.querySelector('.js-reset-button');


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
    
    // alert(`You picked: ${playerMove}. Computer picked: ${computerMove}. Result: You ${result}!`);
    console.log("Current score:", score);

    playerM.innerHTML = `You picked: ${playerMove}.`
    computerM.innerHTML = `Computer picked: ${computerMove}.`
    resultS.innerHTML = `Result: You ${result}!`
    scoreS.innerHTML = `tie: ${score.tie}. loose: ${score.loose}. win:${score.win}`;


}


function gameScore(result) {
  if (result === 'tie') {
    score.tie++;
  } else if (result === 'loose') {
    score.loose++;
  } else if (result === 'win') {
    score.win++;
  }
  localStorage.setItem('score',JSON.stringify(score));
}

restButton.addEventListener('click', () => {
  score.tie = 0;
  score.loose = 0;
  score.win = 0;
  alert('Score has been reset!');
});