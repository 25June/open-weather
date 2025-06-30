import { Box } from '@mui/material';

interface Props {
  size?: string;
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  };
}

const WeatherIcon = ({ weather, size = '50px' }: Props) => {
  return (
    <Box
      sx={{
        width: size,
        height: size,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <img
        alt={weather.description}
        src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
        style={{ width: '100%', height: '100%' }}
      />
    </Box>
  );
};

export default WeatherIcon;
