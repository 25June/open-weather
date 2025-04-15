import { Box } from '@mui/material';
import TodayWeather from 'components/TodayWeather/TodayWeather';
import Forecast from 'components/Forcast/Forcast';
import * as styles from './styles';

const ResultPage = () => {
  return (
    <Box sx={styles.container}>
      <TodayWeather />
      <Forecast />
    </Box>
  );
};

export default ResultPage;
