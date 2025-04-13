import { WeatherResponse, CurrentWeatherResponse } from 'models/common';
import { GeoLocationResponse } from 'models/geoLocation';

const API_KEY = import.meta.env.VITE_API_KEY;
const API_TODAY_WEATHER_URL = import.meta.env.VITE_API_TODAY_WEATHER_URL;
const API_FORECASE_URL = import.meta.env.VITE_API_FORECASE_URL;
const API_GEO_URL = import.meta.env.VITE_API_GEO_URL;

export const getTodayWeather = (
  lat: number,
  lon: number
): Promise<CurrentWeatherResponse> => {
  return fetch(
    `${API_TODAY_WEATHER_URL}?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch((error) => {
      console.error('Error fetching weather data:', error);
      throw error;
    });
};

export const getGeoCode = (city: string): Promise<GeoLocationResponse> => {
  return fetch(`${API_GEO_URL}?q=${city}&limit=5&appid=${API_KEY}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch((error) => {
      console.error('Error fetching geocode data:', error);
      throw error;
    });
};

export const getForecastFor5Days = (
  lat: number,
  lon: number
): Promise<WeatherResponse> => {
  return fetch(
    `${API_FORECASE_URL}?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch((error) => {
      console.error('Error fetching hourly forecast data:', error);
      throw error;
    });
};
