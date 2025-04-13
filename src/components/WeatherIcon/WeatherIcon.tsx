import { Box } from '@mui/material';
import Rainicon from 'assets/RainIcon';
import HeavyRain from 'assets/HeavyRain';
import ClearSky from 'assets/ClearSky';
import OvercastClouds from 'assets/OvercastClouds';
import Clouds from 'assets/Clouds';
import StormAndRain from 'assets/StormAndRain';

interface Props {
  description?: string;
  size?: string;
}

const WeatherIcon = ({ description, size = '50px' }: Props) => {
  let icon = null;
  switch (description) {
    case 'clear sky':
      icon = <ClearSky />;
      break;
    case 'light rain':
    case 'moderate rain':
      icon = <Rainicon />;
      break;
    case 'heavy intensity rain':
      icon = <HeavyRain />;
      break;
    case 'scattered clouds':
      icon = <Clouds />;
      break;
    case 'thunderstorm with heavy rain':
    case 'thunderstorm with rain':
      icon = <StormAndRain />;
      break;
    case 'broken clouds':
    case 'overcast clouds':
      icon = <OvercastClouds />;
      break;
    default:
      icon = <Clouds />;
      break;
  }
  return (
    <Box
      sx={{
        svg: {
          height: size,
          width: size,
        },
      }}
    >
      {icon}
    </Box>
  );
};

export default WeatherIcon;
