function pickComputerMove (){
  const randomNumbers = Math.random();
  let computerMove = '';
  if(randomNumbers > 0 && randomNumbers < 1/3){
    computerMove = 'rock';
  } else if (randomNumbers > 1/3 && randomNumbers < 2/3){
    computerMove = 'paper';
  }else if (randomNumbers >2/3 && randomNumbers < 1){
    computerMove = 'scissor';
  }
}

