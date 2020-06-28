import './styles.css';
import '@pnotify/core/dist/BrightTheme.css';
import { error } from '@pnotify/core';
import fetchCountries from './fetchCountries.js';
import debounce from 'lodash.debounce';
import countryList from './templates/countries.hbs';
import country from './templates/country.hbs';

let inputText = document.querySelector('.input_text');

window.addEventListener('keypress', event => {
  if (event.keyCode == 13) {
    event.preventDefault();
  }
});

let search = async () => {
  if (inputText.value === '') {
    return;
  }
  let result = await fetchCountries(inputText.value);
  document.querySelector('.js-result').innerHTML = '';
  if (!result) {
    showError('No Countries Found');
  } else if (result.length > 10) {
    showError('Too many matches found. Please enter a more specific query!');
  } else if (result.length === 1) {
    document.querySelector('.js-result').innerHTML = country(result[0]);
  } else {
    document.querySelector('.js-result').innerHTML = countryList(result);
  }
};
const showError = text => {
  error({
    text: text,
    closer: false,
    sticker: false,
    destroy: true,
    delay: 500,
  });
};

inputText.addEventListener('input', debounce(search, 500));
