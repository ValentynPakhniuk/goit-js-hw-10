import './css/styles.css';
import Debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import fetchCountries from './fetchCountries.js';
import {countryCard, countryItem} from './cards.js';

const DEBOUNCE_DELAY = 300;
const input = document.getElementById("search-box");
const countryList = document.querySelector(".country-list");
const countryInfo = document.querySelector(".country-info");
  
const template = {
  single: updateInfo,
  multiply: updateList
}

function updateList(cards) {
  countryInfo.innerHTML = '';
  countryList.innerHTML = cards;
}

function updateInfo(card) {
  countryList.innerHTML = '';
  countryInfo.innerHTML = card;
}

input.addEventListener('input', Debounce(onInput, DEBOUNCE_DELAY));

function onInput(e) {
  e.preventDefault();

  const inputValue = e.target.value.trim();
  if (input.value.length === 0) {
    countryInfo.innerHTML = '';
    countryList.innerHTML = '';
    return;
  }
  fetchCountries(inputValue)
    .then((cards) => {
      if (cards.length > 10) throw new Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");
      if (cards.length > 1) {
        return {
          html: cards.reduce((acc, card) => countryItem(card) + acc, ''),
          type: 'multiply',
        };
      }
      if (cards.length === 1) {
        return {
          html: countryCard(cards[0]),
          type: 'single',
        };
      }
    })
    .then(({ html, type }) => template[type](html))
    .catch(onError);
}

function onError(err) {
  console.log(err);
  Notiflix.Notify.failure("Oops, there is no country with that name");
}
