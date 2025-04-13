import { Box } from '@mui/material';
import SearchCity from './components/SearchCity/SearchCity';
import TodayWeather from './components/TodayWeather/TodayWeather';
import Forecast from './components/Forcast/Forcast';
import { GeoProvider } from './contexts/GeoContext';
import * as styles from './styles';
import './App.css';

function App() {
  return (
    <GeoProvider>
      <Box sx={styles.container}>
        <SearchCity />
        <TodayWeather />
        <Forecast />
      </Box>
    </GeoProvider>
  );
}

export default App;
