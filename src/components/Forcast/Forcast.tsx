import { Box, Typography, CircularProgress, Fade } from '@mui/material';
import { useGetForcastFor5Days } from 'hooks/useGetForcastFor5Days';
import { useGeoContext } from 'contexts/GeoContext';
import Content from './Content';
import * as styles from './styles';

const Forecast = () => {
  const { selectedLocation } = useGeoContext();
  const { fiveDayForecast, loading } = useGetForcastFor5Days(
    selectedLocation.lon,
    selectedLocation.lat
  );

  return (
    <Box sx={styles.container}>
      <Typography sx={styles.title}>5-day Forecast (3 Hours)</Typography>
      <Fade in={loading}>
        <Box>{loading && <CircularProgress />}</Box>
      </Fade>
      <Fade in={!loading}>
        <Box>{fiveDayForecast && <Content data={fiveDayForecast.list} />}</Box>
      </Fade>
    </Box>
  );
};

export default Forecast;
