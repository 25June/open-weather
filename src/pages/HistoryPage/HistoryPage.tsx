import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import { useGetHistorySearch } from 'src/hooks/useGetHistorySearch';
import * as styles from './styles';
import { GeoLocation } from 'src/models/geoLocation';
import { useGeoContext } from 'src/contexts/GeoContext';

const HistoryPage = () => {
  const { history, removeHistorySearch, getHistorySearch } =
    useGetHistorySearch();
  const { setSelectedLocation } = useGeoContext();
  const navigate = useNavigate();

  useEffect(() => {
    getHistorySearch();
  }, []);
  const handleClickItem = (item: GeoLocation) => {
    setSelectedLocation(item);
    navigate('/result');
  };

  return (
    <Box sx={styles.container}>
      {history.length ? (
        history.map((item) => {
          return (
            <Box key={item.name} sx={styles.historyItem}>
              <Button onClick={() => handleClickItem(item)}>
                <Typography>{item.name}</Typography>
              </Button>
              <Button onClick={() => removeHistorySearch(item)}>Remove</Button>
            </Box>
          );
        })
      ) : (
        <Typography sx={styles.noHistory}>No history</Typography>
      )}
    </Box>
  );
};

export default HistoryPage;
