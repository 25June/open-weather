import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getHistoryForecast } from 'src/services/api';

interface Props {
  lon?: number;
  lat?: number;
}

export const useGetHistoryForecast = ({ lat, lon }: Props) => {
  const [historyForecast, setHistoryForecast] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const { search } = useLocation();
  const [start, setStart] = useState<number | undefined>(undefined);
  const [end, setEnd] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (search) {
      const params = new URLSearchParams(search);
      const start = params.get('start');
      const end = params.get('end');
      if (start) {
        setStart(new Date(start).getTime());
      }
      if (end) {
        setEnd(new Date(end).getTime());
      }
    }
  }, [search]);

  useEffect(() => {
    if (lat && lon && start && end) {
      setLoading(true);
      getHistoryForecast(lat, lon, start, end)
        .then((data) => {
          setHistoryForecast(data);
        })
        .finally(() => setLoading(false));
    } else {
      setHistoryForecast(undefined);
      setLoading(false);
    }
  }, [lat, lon, start, end]);

  console.log('historyForecast', historyForecast);

  return {
    loading: loading,
    historyForecast: historyForecast,
  };
};
