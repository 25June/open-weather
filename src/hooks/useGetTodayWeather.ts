import { useState, useEffect } from 'react';
import { CurrentWeatherResponse } from 'models/common';
import { getTodayWeather } from 'services/api';

export const useGetTodayWeather = (lon?: number, lat?: number) => {
  const [weather, setWeather] = useState<CurrentWeatherResponse>();
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    const handler = setTimeout(() => {
      if (lat && lon) {
        getTodayWeather(lat, lon)
          .then((data) => {
            setWeather(data);
          })
          .finally(() => setLoading(false));
      } else {
        setWeather(undefined);
        setLoading(false);
      }
    }, 200);
    return () => {
      clearTimeout(handler);
    };
  }, [lat, lon]);

  return {
    loading: loading,
    weather: weather,
  };
};
