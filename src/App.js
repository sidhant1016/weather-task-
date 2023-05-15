import React, { useState } from 'react';
import axios from 'axios';

import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.request(options);
      setWeatherData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  

  const options = {
    method: 'GET',
    url: 'https://api.openweathermap.org/data/2.5/weather?q=vadodara&appid=2ee60f4df5cc617a4ee6be757ccdb93f',
    params: {city},
  headers: {
    'X-RapidAPI-Key': '340ff2bcc0mshb1e32c10b6349d0p144914jsn6292109753c6',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};
   

  return (
    <div className="App">
      <h1>WeatherReport</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={city} onChange={handleChange} placeholder="Enter city name" />
        <button type="submit">Get Weather</button>
      </form>
      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          
        </div>
      )}
    </div>
  );
}

export default App;
