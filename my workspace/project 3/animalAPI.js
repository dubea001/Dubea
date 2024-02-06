const temperature = document.querySelector('#temperature');
const city = document.querySelector('#city-name');
const humidityDiv = document.querySelector('#humidity-div');
const windSpeedDiv = document.querySelector('#wind-speed-div');
const mainDiv = document.querySelector('#mainDiv');
//const humidity = document.querySelector('#humidity');
//const windSpeed = document.querySelector('#wind-speed');

async function getWeather() {
  const inputValue = document.querySelector('#searchBox').value;
  const apiKey = 'TqXSQjjYmy8utguzHPQhrczrlr5afSgOO2xnEThP';
  const url = 'https://api.api-ninjas.com/v1/weather?city=' + inputValue;
  try {
    const data = await fetch(url, {
      method: 'GET',
      headers: {
        'X-Api-Key': apiKey,
        'content-type': 'application/json'
      }
    });
    if (!data.ok) throw new Error('Request failed!');
    const response = await data.json();
    humidityDiv.innerHTML = `<p>humidity</p>
        <img src="images/icons8-humidity-50.png">
        <p id="humidity">${response.humidity}%</p>`;
    windSpeedDiv.innerHTML = `<p>wind speed</p>
        <img src="images/icons8-wind-50.png">
        <p id="wind-speed">${response.wind_speed}km/h</p>`;
    if (response.temp > 0) {
      mainDiv.innerHTML = `<img src="images/icons8-sunny-64.png">
      <h2 id="temperature">${response.temp}&deg;c</h2>
      <h3 id="city-name">${inputValue}</h3>`;
    } else {
      mainDiv.innerHTML = `<img src="images/icons8-sunny-64.png">
      <h2 id="temperature">31&deg;c></h2>
      <h3 id="city-name">${inputValue}</h3>`;
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
  document.querySelector('#searchBox').value = "";
};



const searchBtn = document.querySelector('#search-btn');
searchBtn.addEventListener('click', getWeather);