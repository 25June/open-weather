import React, { JSX } from 'react';
import { Typography, Grid, Divider } from '@mui/material';

import { ListItem } from 'models/common';
import WeatherIcon from 'components/WeatherIcon/WeatherIcon';
import * as styles from './styles';

interface FormattedData {
  header: string;
  time: string;
  description: string;
  icon: JSX.Element;
  temp: string;
}

interface Props {
  data?: ListItem[];
}
const Content = ({ data }: Props) => {
  const forecastData = (data || []).reduce((acc, item) => {
    const date = new Date(item.dt * 1000);
    const formattedDate = date.toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'long',
    });
    const formattedData = {
      ...item,
      header: `${formattedDate}`,
      time: date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
      }),
      description: item.weather[0].description,
      icon: <WeatherIcon weather={item.weather[0]} />,
      temp: `${item.main.temp_min} / ${item.main.temp_max}°C`,
    };
    return {
      ...acc,
      [formattedDate]: acc[formattedDate]
        ? [...acc[formattedDate], formattedData]
        : [formattedData],
    };
  }, {} as Record<string, FormattedData[]>);

  return (
    <>
      {Object.keys(forecastData).map((key) => (
        <React.Fragment key={key}>
          {key && (
            <>
              <Divider sx={{ marginBottom: 1, marginTop: 1 }} />
              <Typography sx={styles.date}>{key}</Typography>
            </>
          )}
          {forecastData[key].map((item) => {
            if (!item) {
              return null;
            }
            return (
              <Grid
                container
                alignItems="center"
                spacing={2}
                sx={{ marginBottom: 1 }}
                key={item.time}
              >
                <Grid size={3}>
                  <Typography sx={styles.time}>{item.time}</Typography>
                </Grid>
                <Grid size={2}>{item.icon}</Grid>
                <Grid size={4}>
                  <Typography sx={styles.tempature}>{item.temp}</Typography>
                </Grid>
                <Grid size={3}>
                  <Typography sx={styles.description}>
                    {item.description}
                  </Typography>
                </Grid>
              </Grid>
            );
          })}
        </React.Fragment>
      ))}
    </>
  );
};

export default Content;
