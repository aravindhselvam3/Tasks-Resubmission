// Define the API endpoint URL
const apiUrl = 'https://restcountries.com/v3.1/all';

// Make a GET request to the API
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Loop through the countries and print the desired information
    data.forEach(country => {
      const name = country.name.common;
      const region = country.region;
      const subregion = country.subregion;
      const population = country.population;
      
      console.log(`Country: ${name}`);
      console.log(`Region: ${region}`);
      console.log(`Subregion: ${subregion}`);
      console.log(`Population: ${population}`);
      console.log('-----------------------');
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
