import { useState } from 'react'
import './App.css'
import shirtIcon from './shirt.png'
import jacketIcon from './jacket.png'
import winterJacketIcon from './winterJacket.png'
import rainJacket from './rainJacket.png'

function App() {
  const [cityName, setCityName] = useState("")
  const [weatherData, setWeatherData] = useState(null)

  const handleCityNameInput = (e) => {
    setCityName(e.target.value)
  }

  const weatherIcons = {
    Clear: shirtIcon,
    Clouds: jacketIcon,
    Snow: winterJacketIcon,
    Rain: rainJacket
  }

  const fetchOpenWeatherApi = () => {
    const apiKey = "9af04edca48732aeccdff09b5b7406a3";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    fetch(url)
      .then(response => response.json())
      .then(responseResult => setWeatherData(responseResult))
      .catch(err => console.error("API Fehler:", err))
  }

  return (
    <div>
      <h1>QuickWeather</h1>
      <input
        type='text'
        placeholder='Stadtname'
        onChange={handleCityNameInput}
      />
      <button onClick={fetchOpenWeatherApi}>Suchen</button>

      <div>
        {weatherData?.main && (
          <>
            <p>
              <img
                src={weatherIcons[weatherData.weather[0].main]}
                className='weather-icon'
                alt={weatherData.weather[0].main}
              />
            </p>
            <p>{Math.round(weatherData.main.temp)}°C</p>
            <p>{Math.round(weatherData.main.feels_like)}°C gefühlte Temperatur</p>
            <p>{weatherData.weather[0].main}</p>


          </>
        )}
      </div>
    </div>
  )
}

export default App