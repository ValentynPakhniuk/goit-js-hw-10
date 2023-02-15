import './css/styles.css';
import Debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import fetchCountries from './fetchCountries.js';
import {countryCard, countryItem} from './cards.js';

const DEBOUNCE_DELAY = 300;
const input = document.getElementById("search-box");
const countryList = document.querySelector(".country-list");
const countryInfo = document.querySelector(".country-info");

input.addEventListener('input', Debounce(onInput, DEBOUNCE_DELAY));

function onInput(e) {
  e.preventDefault();

  const inputValue = e.target.value.trim();
  if (inputValue.length === 0) {
    countryInfo.innerHTML = '';
    countryList.innerHTML = '';
    console.clear();
    return;
  }
  fetchCountries(inputValue)
    .then((cards) => {
      if (cards.length > 10) { Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");
        countryList.innerHTML = '';
      }
      else if (cards.length > 1 && cards.length < 10) {
        return countryItem(cards);
      }
      else if (cards.length === 1) {
        return countryCard(cards);
      }
    })
    .catch(onError);
}

function onError() {
  Notiflix.Notify.failure("Oops, there is no country with that name");
}
