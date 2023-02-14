export {countryCard, countryItem};

function countryItem({ name, flags }) {
  const nameCountry = name.official;
  const flagCountry = flags.svg;
  
  return `
    <li class='hero'>
      <img            
        src="${flagCountry}"
        alt="flag"
        width="40"
        height="20"
      />
      <h1>${nameCountry}</h1>
    </li>
    `
}

function countryCard({ name, capital, population, flags, languages }) {
  const languagesCountry = Object.values(languages).join(', ');
  const nameCountry = name.official;
  const flagCountry = flags.svg;
  
  return `
    <div class='hero'>
      <img            
        src="${flagCountry}"
        alt="flag"
        width="40"
        height="20"
      />
      <h1>${nameCountry}</h1>
    </div>
    <p><b>Capital: </b>${capital}</p>
    <p><b>Population: </b>${population}</p>
    <p><b>Languages: </b>${languagesCountry}</p>
    `
}
