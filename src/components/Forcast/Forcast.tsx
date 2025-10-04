import { Box, Typography, CircularProgress, Fade, Link } from '@mui/material';
import { useGetForcastFor5Days } from 'hooks/useGetForcastFor5Days';
import { useGeoContext } from 'contexts/GeoContext';
import Content from './Content';
import * as styles from './styles';
// import { useGetHistoryForecast } from 'src/hooks/useGetHistoryForcast';

const Forecast = () => {
  const { selectedLocation } = useGeoContext();
  const {
    fiveDayForecast,
    loading,
    description,
    gettingDescription,
    activities,
    places,
    placesIntro,
  } = useGetForcastFor5Days(selectedLocation.lon, selectedLocation.lat);
  // const { historyForecast, loading: loadingHistory } = useGetHistoryForecast({
  //   lat: selectedLocation.lat,
  //   lon: selectedLocation.lon,
  // });
  // console.log({ historyForecast, loadingHistory });

  return (
    <Box sx={styles.container}>
      <Typography sx={styles.title}>5-day Forecast (3 Hours)</Typography>
      <Fade in={loading}>
        <Box>{loading && <CircularProgress />}</Box>
      </Fade>
      <Fade in={!loading}>
        <Box>
          <Box
            sx={{
              height: '100%',
              maxHeight: gettingDescription ? '1rem' : '100rem',
              overflow: 'hidden',
              transition: 'all 0.3s ease-in-out',
            }}
          >
            {gettingDescription && <CircularProgress size={'0.5rem'} />}
            <Box sx={styles.description(gettingDescription)}>
              <Typography>{description}</Typography>
              <br />
              {activities && (
                <Typography component={'p'}>{activities}</Typography>
              )}
              <br />
              {places && (
                <Typography component={'p'}>
                  {placesIntro}
                  {places.map((place, index) => (
                    <Link sx={{ display: 'block' }} key={index}>
                      {place.name}
                    </Link>
                  ))}
                </Typography>
              )}
            </Box>
          </Box>

          {fiveDayForecast && <Content data={fiveDayForecast.list} />}
        </Box>
      </Fade>
    </Box>
  );
};

export default Forecast;
