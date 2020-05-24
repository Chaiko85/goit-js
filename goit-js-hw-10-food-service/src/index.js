import './styles.css';
import ourMenu from './templates/ourItemTemplate.hbs';
import menu from './menu.json';

document.querySelector('.js-menu').innerHTML = ourMenu(menu);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switchTheme = () => {
  const body = document.querySelector('body');
  if (body.classList.value === Theme.DARK) {
    body.classList.remove(Theme.DARK);
    body.classList.add(Theme.LIGHT);
  } else {
    body.classList.remove(Theme.LIGHT);
    body.classList.add(Theme.DARK);
  }
};

const jsSwitch = document.querySelector('.js-switch-input');
jsSwitch.addEventListener('change', e => {
  switchTheme();
  if (e.target.checked) {
    localStorage.setItem('theme', Theme.DARK);
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
  }
});

if (localStorage.getItem('theme') === Theme.DARK) {
  jsSwitch.checked = true;
  switchTheme();
}
