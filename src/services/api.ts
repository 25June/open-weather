import { WeatherResponse, CurrentWeatherResponse } from 'models/common';
import { GeoLocationResponse } from 'models/geoLocation';

const API_KEY = import.meta.env.VITE_API_KEY;
const API_TODAY_WEATHER_URL = import.meta.env.VITE_API_TODAY_WEATHER_URL;
const API_FORECASE_URL = import.meta.env.VITE_API_FORECASE_URL;
const API_GEO_URL = import.meta.env.VITE_API_GEO_URL;
const API_HISTORY_FORECAST_URL = import.meta.env.VITE_API_HISTORY_FORECAST_URL;

export const getTodayWeather = (
  lat: number,
  lon: number
): Promise<CurrentWeatherResponse> => {
  const unit = localStorage.getItem('unit') || 'metric';

  return fetch(
    `${API_TODAY_WEATHER_URL}?lat=${lat}&lon=${lon}&units=${unit}&appid=${API_KEY}`
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
  const unit = localStorage.getItem('unit') || 'metric';
  return fetch(
    `${API_FORECASE_URL}?lat=${lat}&lon=${lon}&units=${unit}&appid=${API_KEY}`
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

export const getHistoryForecast = (
  lat: number,
  lon: number,
  start: number,
  end: number
) => {
  const unit = localStorage.getItem('unit') || 'metric';

  return fetch(
    `${API_HISTORY_FORECAST_URL}?lat=${lat}&lon=${lon}&type=hour&units=${unit}&start=${start}&end=${end}&appid=${API_KEY}`
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
