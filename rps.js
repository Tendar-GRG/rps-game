let computerMove = '';
function pickComputerMove (){
  const randomNumbers = Math.random();
  
  if(randomNumbers > 0 && randomNumbers < 1/3){
    computerMove = 'rock';
  } else if (randomNumbers > 1/3 && randomNumbers < 2/3){
    computerMove = 'paper';
  }else if (randomNumbers >2/3 && randomNumbers < 1){
    computerMove = 'scissor';
  }
}

function playGame (playerMove) {

  pickComputerMove();
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
      if (computerMove === 'rcok'){
        result = 'loose'
      }else if (computerMove === 'paper'){
        result = 'win'
      } else if (computerMove === 'scissor') {
        result = 'tie'
      }
    }

    alert(`you pick: ${playerMove} computer pick: ${computerMove} result: ${result}`);
}



