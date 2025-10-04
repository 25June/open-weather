import { useState, useEffect } from 'react';
import { WeatherResponse } from 'models/common';
import { getForecastFor5Days } from 'services/api';
import { useGetForecastDescription } from './useGetForecastDesByAI';

export const useGetForcastFor5Days = (lon: number, lat: number) => {
  const [fiveDayForecast, setFiveDayForecast] = useState<WeatherResponse>();
  const [loading, setLoading] = useState<boolean>(false);
  const {
    onGetDescription,
    loading: gettingDescription,
    description,
    activities,
    places,
    placesIntro,
  } = useGetForecastDescription();
  useEffect(() => {
    setLoading(true);
    const handler = setTimeout(() => {
      if (lat && lon) {
        getForecastFor5Days(lat, lon)
          .then((data) => {
            setFiveDayForecast(data);
            onGetDescription(lat, lon);
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
    gettingDescription,
    description,
    activities,
    places,
    placesIntro,
  };
};
