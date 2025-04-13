import { defineConfig, UserConfig, loadEnv } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(({ mode }): UserConfig => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    mode: env.NODE_ENV,
    base: '/',
    define: {
      API_KEY: JSON.stringify(env.API_KEY),
      API_TODAY_WEATHER_URL: JSON.stringify(env.API_TODAY_WEATHER_URL),
      API_GEO_URL: JSON.stringify(env.API_GEO_URL),
      FORECASE_URL: JSON.stringify(env.FORECASE_URL),
    },
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        contexts: path.resolve(__dirname, 'src/contexts'),
        utils: path.resolve(__dirname, 'src/utils'),
        assets: path.resolve(__dirname, 'src/assets'),
        src: path.resolve(__dirname, 'src'),
        hooks: path.resolve(__dirname, 'src/hooks'),
        models: path.resolve(__dirname, 'src/models'),
        services: path.resolve(__dirname, 'src/services'),
      },
      extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    },
  };
});
