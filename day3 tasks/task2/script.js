// Define the API endpoint URL
const apiUrl = 'https://restcountries.com/v3.1/all';

// Make a GET request to the API
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Loop through the countries and log their flags
    data.forEach(country => {
      const flag = country.flags.svg; // Assuming you want the SVG flag URL
      console.log(`Country: ${country.name.common}, Flag URL: ${flag}`);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
