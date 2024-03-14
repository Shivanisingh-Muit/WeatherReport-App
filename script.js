const apiKey = 'ec68daaefb70b1483d856e38090ae0f7'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather'

const locationInput = document.getElementById('locationInput')
const searchButton = document.getElementById('searchButton')
const locationElement = document.getElementById('location')
const temperatureElement = document.getElementById('temperature')
const descriptionElement = document.getElementById('description')

searchButton.addEventListener('click', () => {
let location = locationInput.value
  if (location) {
    fetchWeather(location)
  }
})

function fetchWeather(location) {
  const url = `${apiUrl}?q=${location}&appid=${apiKey}`

  fetch(url)
    
    .then(response => response.json())
    .then(data => {
      const Name = data.Name
      const Temperature = Math.round
      const tempInCelsius = (data.main.temp - 273.15).toFixed(1)
      const description = data.weather[0].description
      locationElement.innerHTML = `location  :<span>  ${ data.sys.country } </span>`
      temperatureElement.innerHTML = `Temperarture: <span>${tempInCelsius}°C </span>`
      descriptionElement.innerHTML = `Sky Condition: <span>${description}</span>`
    })
    .catch(error => {
      console.error('Error fetching weather data:', error)
      alert('Error fetching weather data. Please check the location and try again.')
    })
}