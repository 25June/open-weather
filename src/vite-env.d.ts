/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_KEY: string;
  readonly VITE_API_TODAY_WEATHER_URL: string;
  readonly VITE_API_GEO_URL: string;
  readonly VITE_API_FORECASE_URL: string;
  readonly VITE_API_HISTORY_FORECAST_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
