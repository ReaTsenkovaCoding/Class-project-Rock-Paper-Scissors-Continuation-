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

document.querySelectorAll('.theme-button').forEach(button =>{
  button.addEventListener('click', () => { setTheme(button.dataset.theme);});
  });

setTheme(localStorage.getItem('theme') || 'black');

  