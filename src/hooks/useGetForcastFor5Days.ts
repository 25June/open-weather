import { useState, useEffect } from 'react';
import { WeatherResponse } from 'models/common';
import { getForecastFor5Days } from 'services/api';

export const useGetForcastFor5Days = (lon: number, lat: number) => {
  const [fiveDayForecast, setFiveDayForecast] = useState<WeatherResponse>();
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    const handler = setTimeout(() => {
      if (lat && lon) {
        getForecastFor5Days(lat, lon)
          .then((data) => {
            setFiveDayForecast(data);
          })
          .finally(() => setLoading(false));
      } else {
        setFiveDayForecast(undefined);
        setLoading(false);
      }
    }, 200);
    return () => {
      clearTimeout(handler);
    };
  }, [lat, lon]);

  return {
    loading: loading,
    fiveDayForecast: fiveDayForecast,
  };
};
