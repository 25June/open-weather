import { Typography, Grid } from '@mui/material';
import WeatherIcon from 'components/WeatherIcon/WeatherIcon';
import * as styles from './styles';

interface Props {
  humidity?: number;
  winds?: number;
  visibility?: number;
  temperature?: number;
  weatherIcon?: any;
  date?: string;
}

const Content = ({
  humidity,
  winds,
  visibility,
  temperature,
  weatherIcon,
  date,
}: Props) => {
  const formatttedVisibility = visibility
    ? `${(visibility / 1000).toFixed(2)} km`
    : 'N/A';
  const unit = localStorage.getItem('unit') || 'metric';
  const temperatureUnit = unit === 'imperial' ? '°F' : '°C';
  return (
    <>
      <Typography sx={styles.time}>{date}</Typography>
      <Grid container alignItems="center" spacing={2}>
        <Grid>
          <WeatherIcon weather={weatherIcon} size={'5rem'} />
        </Grid>
        <Grid>
          <Typography sx={styles.temperature}>
            {temperature}
            {temperatureUnit}
          </Typography>
          <Typography sx={styles.description}>
            {weatherIcon.description}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        <Grid size={4}>
          <Typography sx={styles.humidityLabel}>Humidity</Typography>
          <Typography sx={styles.humidity}>{humidity}%</Typography>
        </Grid>
        <Grid size={4}>
          <Typography sx={styles.windsLabel}>Winds</Typography>
          <Typography sx={styles.winds}>{winds} m/s</Typography>
        </Grid>
        <Grid size={4}>
          <Typography sx={styles.visibilityLabel}>Visibility</Typography>
          <Typography sx={styles.visibility}>{formatttedVisibility}</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Content;
