import { useState } from 'react';
import {
  getForecastDescriptionByAI,
  // getForecastHistoricalByAI,
} from 'src/services/api';

export const useGetForecastDescription = () => {
  const [description, setDescription] = useState<any>();
  const [activities, setActivities] = useState<any>();
  const [places, setPlaces] =
    useState<{ name: string; longitude: number; latitude: number }[]>();
  const [placesIntro, setPlacesIntro] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  // const [history, setHistory] = useState<any>();

  const onGetDescription = (lat: number, lon: number) => {
    if (lat && lon) {
      setLoading(true);
      getForecastDescriptionByAI(lat, lon)
        .then((data) => {
          const formatData = JSON.parse(data);
          setDescription(formatData.weatherForecast);
          setActivities(formatData.activities);
          setPlaces(formatData.places);
          setPlacesIntro(formatData.placesIntro);
        })
        .finally(() => setLoading(false));
      // getForecastHistoricalByAI(lat, lon, JSON.stringify(newData))
      //   .then((data) => {
      //     setHistory(data);
      //   })
      //   .finally(() => setLoading(false));
    } else {
      setDescription(undefined);
      setLoading(false);
    }
  };

  console.log('description', description);
  // console.log('history', history);

  return {
    loading: loading,
    onGetDescription,
    description,
    activities,
    places,
    placesIntro,
  };
};
