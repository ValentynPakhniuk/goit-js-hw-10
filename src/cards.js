export { countryCard, countryItem };
  
const countryList = document.querySelector(".country-list");
const countryInfo = document.querySelector(".country-info");

function countryItem(cards) {
  const cardUl = cards.map(({ name, flags }) => {
    return `
    <li class='hero'>
      <img            
        src="${flags.svg}"
        alt="flag"
        width="40"
        height="20"
      />
      <h1>${name.official}</h1>
    </li>
    `})
    .join('');
  
    countryList.innerHTML = cardUl;
    countryInfo.innerHTML = '';
}

function countryCard(card) {
  const cardInfo = card.map(({ name, capital, population, flags, languages }) => {
    return `
    <div class='hero'>
      <img            
        src="${flags.svg}"
        alt="flag"
        width="40"
        height="20"
      />
      <h1>${name.official}</h1>
    </div>
    <p><b>Capital: </b>${capital}</p>
    <p><b>Population: </b>${population}</p>
    <p><b>Languages: </b>${Object.values(languages).join(', ')}</p>
    `})
    .join('');
  
    countryList.innerHTML = '';
    countryInfo.innerHTML = cardInfo;
}
