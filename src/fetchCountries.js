function manageErrors(response) {
  if(!response.ok) {
    const responseError = { 
      statusText: response.statusText,
      status: response.status
    };
    throw new Error(responseError);
  }
  return response;
}

function fetchCountries(inputValue) {
  
  const URL = `https://restcountries.com/v3.1/name/${inputValue}?fields=name,capital,population,flags,languages`;

  return fetch(URL).then(manageErrors).then((response) => response.json());
}

export default fetchCountries;