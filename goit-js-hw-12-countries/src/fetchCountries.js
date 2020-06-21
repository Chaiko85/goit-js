const baseUrl = 'https://restcountries.eu/rest/v2/name/';

export default function fetchCountries(searchQuery) {
  const enteredCountry = baseUrl + searchQuery;
  return fetch(enteredCountry)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        return false;
      }
    })
    .catch(() => {
      return false;
    });
}
