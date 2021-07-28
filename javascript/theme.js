if (localStorage.getItem('theme') == 'theme-light') {
  lightMode(true);
}

function lightMode(isLight) {
  if (isLight) {
    document.body.setAttribute('id', 'theme-light');
    localStorage.setItem('theme', 'theme-light');
  } else {
    document.body.setAttribute('id', 'theme-dark');
    localStorage.removeItem('theme');
  }
}