import React from 'react'
import Body from './body'
import './info.css'
const info = ({weather,error}) => {
  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
         {weather && (
                <div>
                    <h3>Weather in {weather.name}</h3>
                    <p>🌡️ Temperature: {weather.main.temp}°C</p>
                    <p>🌤️ Condition: {weather.weather[0].main}</p>
                    <p>💧 Humidity: {weather.main.humidity}%</p>
                    <p>💨 Wind Speed: {weather.wind.speed} m/s</p>
                </div>
            )}
    </div>
  )
}

export default info
