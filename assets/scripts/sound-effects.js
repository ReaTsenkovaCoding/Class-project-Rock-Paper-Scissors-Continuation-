const hoverSound = new Audio('assets/audio/hover.mp3');
hoverSound.volume = 0.3;

document.querySelectorAll('.move-button').forEach(button => {
  button.addEventListener('mouseenter', () => {
    hoverSound.currentTime = 0;
    hoverSound.play();
  });
});

document.querySelectorAll('.theme-button').forEach(button => {
  button.addEventListener('mouseenter', () => {
    hoverSound.currentTime = 0;
    hoverSound.play();
  });
});

document.querySelectorAll('.reset-score-button').forEach(button => {
  button.addEventListener('mouseenter', () => {
    hoverSound.currentTime = 0;
    hoverSound.play();
  });
});


document.querySelectorAll('.nav-link').forEach(button => {
  button.addEventListener('mouseenter', () => {
    hoverSound.currentTime = 0;
    hoverSound.play();
  });
});

document.querySelectorAll('.my-project').forEach(button => {
  button.addEventListener('mouseenter', () => {
    hoverSound.currentTime = 0;
    hoverSound.play();
  });
});


document.querySelectorAll('.theme-button').forEach(button =>{
  button.addEventListener('click', () => { setTheme(button.dataset.theme);});
}); 
