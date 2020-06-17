export default function fetchCountries(searchQuery) {
  return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  })
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
