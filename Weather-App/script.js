let btnId=1;
let textId=1;
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const cardContainer = document.getElementById('cardContainer');

    data.forEach(country => {
      const card = createCard(country.name.common, country.capital[0], country.region, country.latlng, country.flags.svg);
      const button = card.querySelector('.btn');
      const id = button["id"];
      
      button.addEventListener('click', () => {

        let lat = document.getElementById("lat").innerText.split(",");
        let long = lat[1].trim();
        lat = lat[0].split(" ")[1].trim();
        
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=4920ed9f3a280ed6df4d696f630051ad`;
        fetch(url)  
        .then(response => response.json())
          .then(weatherData => {
           
            updateCardWithWeather(id, weatherData.weather[0].description);
          });
      });

      cardContainer.appendChild(card);
    });
  });
  


function createCard(countryName, capital, region, latlng, flag) {
  const card = document.createElement('div');
  card.className = 'card';

  const cardHeader = document.createElement('div');
  cardHeader.className = 'card-header';
  cardHeader.textContent = countryName;

  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';

  const capitalElement = createCardElement('Capital', capital);
  const regionElement = createCardElement('Region', region);
  const latlngElement = createCardElement('Latlng', latlng);
  latlngElement.id="lat"
  const flagElement = createCardElement('Flag', '');
  const button = createButton('Click for Weather');
  const text = createWeatherText();

  cardBody.appendChild(capitalElement);
  cardBody.appendChild(regionElement);
  cardBody.appendChild(latlngElement);
  cardBody.appendChild(flagElement);
  cardBody.appendChild(button);
  cardBody.appendChild(text);

  card.appendChild(cardHeader);
  card.appendChild(cardBody);

 
  fetch(flag)
    .then(response => response.blob())
    .then(blob => {
      const url = URL.createObjectURL(blob);
      const img = document.createElement('img');
      img.src = url;
      img.className = 'card-img-top';
      flagElement.appendChild(img);
    });

  return card;
}

function createCardElement(label, value) {
  const element = document.createElement('p');
  element.className = 'card-text';
  element.innerHTML = `<strong>${label}: </strong>${value}`;
  return element;
}

function createWeatherText()
{
  const weatherElement = document.createElement('p');
  weatherElement.className = 'weather-text';
  weatherElement.id=textId++;
  return weatherElement;
}

function createButton(text) {
  const button = document.createElement('button');
  button.className = 'btn btn-primary';
  button.id=btnId++;
  button.textContent = text;
  return button;
}


function updateCardWithWeather(id, weatherDescription) {
  console.log(weatherDescription)
  const weatherElement = document.getElementsByClassName('weather-text');
  weatherElement[id-1].innerText=`weather: ${weatherDescription} `;
}
