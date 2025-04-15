import { useState } from 'react';
import { GeoLocation } from 'models/geoLocation';

export const useGetHistorySearch = () => {
  const [history, setHistory] = useState<GeoLocation[]>([]);

  const getHistorySearch = () => {
    const history = localStorage.getItem('history');
    if (history) {
      setHistory(JSON.parse(history));
    }
  };

  const addHistorySearch = (location: GeoLocation) => {
    const history = localStorage.getItem('history');
    if (history) {
      const currentHistory = JSON.parse(history);
      if (
        currentHistory.find((item: GeoLocation) => item.name === location.name)
      ) {
        return;
      }
      const newHistory = [...currentHistory, location];
      localStorage.setItem('history', JSON.stringify(newHistory));
    } else {
      localStorage.setItem('history', JSON.stringify([location]));
    }
  };
  const removeHistorySearch = (location: GeoLocation) => {
    const history = localStorage.getItem('history');
    if (history) {
      const newHistory = JSON.parse(history).filter(
        (item: GeoLocation) => item.name !== location.name
      );
      localStorage.setItem('history', JSON.stringify(newHistory));
      getHistorySearch();
    }
  };

  return {
    history,
    addHistorySearch,
    getHistorySearch,
    removeHistorySearch,
  };
};
