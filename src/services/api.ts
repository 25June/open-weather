import { WeatherResponse, CurrentWeatherResponse } from 'models/common';
import { GeoLocationResponse } from 'models/geoLocation';
import {
  FORCAST_HISTORY_PROMPT,
  FORECAST_DESCRIPTION_PROMPT,
} from 'src/utils/prompt';

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

export async function postData(url: string, data: any) {
  const response = await fetch(url, {
    method: 'POST', // Set the request method to POST
    headers: {
      'Content-Type': 'application/json', // Set the content type header (optional, depends on your data format)
    },
    body: JSON.stringify(data), // Convert data object to JSON string for sending
  });

  // Check for successful response
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  // Parse the response data (assuming JSON format)
  const responseData = await response.json();
  return responseData;
}

export const GEMINI_API_KEY = 'AIzaSyA43Zus17ofsEAO4e6NMOYd_hHfAjwPLPk';

export const mockBody = (parts: any[] = []) => {
  return {
    contents: [
      {
        role: 'user',
        parts,
      },
    ],
    generationConfig: {
      responseMimeType: 'application/json',
    },
  };
};
export function formatText(prompt: string) {
  return { text: prompt };
}

export const getForecastDescriptionByAI = (lat: number, lon: number) => {
  const newParts = [];

  const updatePrompt = FORECAST_DESCRIPTION_PROMPT(lat, lon);

  console.log('updatePrompt', updatePrompt, 'lat', lat, 'lon', lon);
  newParts.push(formatText(`${updatePrompt}`));
  return postData(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${GEMINI_API_KEY}`,
    { ...mockBody(newParts) }
  )
    .then((response: any) => {
      const firstPart = response?.candidates?.[0]?.content?.parts?.[0];
      if (firstPart) {
        return firstPart.text;
      }
      return 'No result found';
    })
    .catch((error) => error);
};

export const getForecastHistoricalByAI = (
  lat: number,
  lon: number,
  stringifyData: string
) => {
  const newParts = [];
  let updatePrompt = FORCAST_HISTORY_PROMPT.replace('LATITUDE', lat.toString());
  updatePrompt = FORCAST_HISTORY_PROMPT.replace('LONGITUDE', lon.toString());
  updatePrompt = FORCAST_HISTORY_PROMPT.replace('DATA', stringifyData);
  newParts.push(formatText(`${updatePrompt}`));
  return postData(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`,
    { ...mockBody(newParts) }
  )
    .then((response: any) => {
      const firstPart = response?.candidates?.[0]?.content?.parts?.[0];
      if (firstPart) {
        return firstPart.text;
      }
      return 'No result found';
    })
    .catch((error) => error);
};
