const baseUrl = 'https://restcountries.eu/rest/v2/name/';

export default function fetchCountries(searchQuery) {
  const enteredCountry = baseUrl + searchQuery;
  return fetch(enteredCountry).then(response => {
    return response.json();
  });
}
