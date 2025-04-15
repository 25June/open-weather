import { Box, CircularProgress, Fade } from '@mui/material';
import Content from './Content';
import { useGetTodayWeather } from 'hooks/useGetTodayWeather';
import { useGeoContext } from 'contexts/GeoContext';
import * as styles from './styles';

const TodayWeather = () => {
  const { selectedLocation } = useGeoContext();
  const { loading, weather } = useGetTodayWeather(
    selectedLocation.lon,
    selectedLocation.lat
  );

  return (
    <Box sx={styles.container}>
      <Fade in={loading}>
        <Box>{loading && <CircularProgress />}</Box>
      </Fade>
      <Fade in={!loading}>
        <Box>
          {weather && (
            <Content
              humidity={weather.main.humidity}
              winds={weather.wind.speed}
              visibility={weather.visibility}
              temperature={weather.main.temp}
              weatherDescription={weather.weather[0].description}
              date={
                weather.dt ? new Date(weather.dt * 1000).toDateString() : ''
              }
            />
          )}
        </Box>
      </Fade>
    </Box>
  );
};

export default TodayWeather;
