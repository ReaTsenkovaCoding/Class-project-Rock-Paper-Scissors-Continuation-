let gameOver = false;

/* =========================================================
                    MAIN GAME FUNCTION
=========================================================*/

function playGame(playerMove){

  if(gameOver) {
    alert("Click 'Reset score' to play again!"); 
    return; 
  }

  const computerMove = pickComputerMove();
  let result = '';
  
  if(playerMove === 'scissors'){

    if(computerMove === 'rock') {
      result = 'You lose.';
    }
    else if(computerMove === 'paper'){
      result = 'You win!';
    }
    else if(computerMove === 'scissors'){
      result = 'Tie.';
    }
  }     

  else if(playerMove === 'paper'){

    if(computerMove === 'rock') {
      result = 'You win!';
    }
    else if(computerMove === 'paper'){
      result = 'Tie.';
    }
    else if(computerMove === 'scissors'){
      result = 'You lose.';
    }
  }

  else if(playerMove === 'rock'){

    if(computerMove === 'rock') result = 'Tie.';
    else if(computerMove === 'paper') result = 'You lose.';
    else if(computerMove === 'scissors') result = 'You win!';

  }

  if(result === 'You win!') score.wins ++;
  else if(result === 'You lose.') score.losses ++;
  else if(result === 'Tie.') score.ties ++;

  localStorage.setItem('score', JSON.stringify(score)); 
  updateScoreElement();
  
  document.querySelector('.js-moves').innerHTML = `You:
    <img src="assets/images/${playerMove}-emoji.png" class="move-icon">
    <img src="assets/images/${computerMove}-emoji.png" class="move-icon"> :Bot`;

  localStorage.setItem(
    'lastMoves',
    document.querySelector('.js-moves').innerHTML
  );

  if(score.wins >= 5 || score.losses >= 5 || score.ties >= 5){

    gameOver = true;
    document.querySelector('.js-result').innerHTML = result;
    localStorage.setItem('lastResult',result);
  }

}

/*=========================================================
        SCORE (load from localStorage or default)
=========================================================*/

let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0, 
  losses: 0,
  ties: 0
}; 

updateScoreElement();

if(localStorage.getItem('lastMoves')){
  document.querySelector('.js-moves').innerHTML =
    localStorage.getItem('lastMoves');
}


if(localStorage.getItem('lastResult')){
  document.querySelector('.js-result').innerHTML = localStorage.getItem('lastResult');
}

gameOver = (
  score.wins >= 5 ||
  score.losses >= 5 ||
  score.ties >= 5
);

/*=========================================================
                        UI HELPERS
=========================================================*/

function updateScoreElement() {
  document.querySelector('.js-score').innerHTML =
    `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

/*=========================================================
                        GAME HELPERS
=========================================================*/

function pickComputerMove() {
  const randomNumber = Math.random();        
  let computerMove = '';
  
  if(randomNumber >= 0 && randomNumber < 1/3){
    computerMove = 'rock';
  } 
  else if(randomNumber >= 1/3 && randomNumber < 2/3){
    computerMove = 'paper';
  }
  else if(randomNumber >= 2/3 && randomNumber < 1){
    computerMove = 'scissors';
  }

  return computerMove;
}

/*=========================================================
                          THEME
=========================================================*/

function setTheme(theme){

  document.body.className = `theme-${theme}`; 
  localStorage.setItem('theme', theme);

  const theme_png_right = document.querySelector('.theme-png-right');
  const theme_png_left = document.querySelector('.theme-png-left');

  theme_png_right.classList.remove('show');
  theme_png_left.classList.remove('show');

  void theme_png_right.offsetWidth; 
  void theme_png_left.offsetWidth;

  theme_png_right.classList.add('show');
  theme_png_left.classList.add('show');

}
