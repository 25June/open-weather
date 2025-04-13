interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level?: number;
  humidity: number;
  temp_kf: number;
}

interface Clouds {
  all: number;
}

interface Wind {
  speed: number;
  deg: number;
  gust?: number;
}

interface Rain {
  '3h'?: number;
}

interface Sys {
  pod: string;
}

interface ListItem {
  dt: number;
  main: Main;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  rain?: Rain;
  sys: Sys;
  dt_txt: string;
}

interface Coord {
  lat: number;
  lon: number;
}

interface City {
  id: number;
  name: string;
  coord: Coord;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

interface WeatherResponse {
  cod: string;
  message: number;
  cnt: number;
  list: ListItem[];
  city: City;
}

interface CurrentWeatherResponse {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  rain?: {
    '1h'?: number;
  };
  clouds: Clouds;
  dt: number;
  sys: Sys & {
    // Combining existing Sys interface with new properties
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export type {
  CurrentWeatherResponse,
  WeatherResponse,
  ListItem,
  Weather,
  Main,
  Clouds,
  Wind,
  Rain,
  Sys,
  Coord,
  City,
};
