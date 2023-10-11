// Step 1: Fetch the data from the Restcountries API
fetch('https://restcountries.com/v3.1/all')
  .then((response) => response.json())
  .then((data) => {
    // Step 2: Problem 1 - Get all the countries from the Asia continent/region using the Filter function
    const asiaCountries = data.filter((country) => country.region === 'Asia');
    console.log('Countries in Asia:', asiaCountries);

    // Step 3: Problem 2 - Get all the countries with a population of less than 2 lakhs using Filter function
    const lowPopulationCountries = data.filter((country) => country.population < 200000);
    console.log('Countries with population less than 2 lakhs:', lowPopulationCountries);

    // Step 4: Problem 3 - Print name, capital, and flag using forEach function
    data.forEach((country) => {
      console.log(`Name: ${country.name.common}, Capital: ${country.capital}, Flag: ${country.flags[0]}`);
    });

    // Step 5: Problem 4 - Print the total population of countries using reduce function
    const totalPopulation = data.reduce((total, country) => total + country.population, 0);
    console.log('Total Population:', totalPopulation);

    // Step 6: Problem 5 - Print the country which uses US Dollars as currency
    const usDollarCountries = data.filter((country) =>
      country.currencies && country.currencies.USD
    );
    console.log('Countries using US Dollars:', usDollarCountries);
  })
  .catch((error) => console.error('Error fetching data:', error));
