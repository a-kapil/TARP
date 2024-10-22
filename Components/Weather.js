import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = ({ location }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (!location || !location.latitude || !location.longitude) {
        setError('Invalid location data');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get('https://api.open-meteo.com/v1/forecast', {
          params: {
            latitude: location.latitude,
            longitude: location.longitude,
            current_weather: true,
          },
        });

        if (response.data.current_weather) {
          setWeatherData(response.data.current_weather);
        } else {
          setError('No weather data available.');
        }
      } catch (err) {
        setError(err.message || 'An error occurred while fetching weather data.');
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [location]);

  if (loading) return <p>Loading weather data...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!weatherData) return <p>No weather data available.</p>;

  return (
    <div>
      <h2>Current Weather</h2>
      <p><strong>Temperature:</strong> {weatherData.temperature}°C</p>
      <p><strong>Wind Speed:</strong> {weatherData.windspeed} km/h</p>
      <p><strong>Wind Direction:</strong> {weatherData.winddirection}°</p>
    </div>
  );
};

export default Weather;
