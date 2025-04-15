import { GeoProvider } from './contexts/GeoContext';
import './App.css';
import RouterProvider from './router/router';

function App() {
  return (
    <GeoProvider>
      <RouterProvider />
    </GeoProvider>
  );
}

export default App;
