import {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
  useCallback,
  useMemo,
} from 'react';

type GeoContextProps = {
  setGeoLocation: (lon: number, lat: number) => void;
  longitude: number;
  latitude: number;
};

const GeoContext = createContext<GeoContextProps>({
  setGeoLocation: () => {},
  longitude: 0,
  latitude: 0,
});

export const GeoProvider = ({ children }: PropsWithChildren<{}>) => {
  const [longitude, setLongitude] = useState<number>(0);
  const [latitude, setLatitude] = useState<number>(0);

  const setGeoLocation = useCallback((lon: number, lat: number) => {
    setLongitude(lon);
    setLatitude(lat);
  }, []);

  const value = useMemo(
    () => ({ setGeoLocation, longitude, latitude }),
    [setGeoLocation, longitude, latitude]
  );

  return <GeoContext.Provider value={value}>{children}</GeoContext.Provider>;
};

export const useGeoContext = () => {
  const useGeo = useContext(GeoContext);
  if (!useGeoContext) {
    console.error('Can not find Geo context');
  }
  return useGeo;
};
