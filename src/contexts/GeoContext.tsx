import {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
  useMemo,
  useLayoutEffect,
} from 'react';
import { GeoLocation } from 'src/models/geoLocation';
import { defaultLocation } from 'assets/mock/defaultLocation';

type GeoContextProps = {
  setSelectedLocation: (data: GeoLocation) => void;
  selectedLocation: GeoLocation;
};

const GeoContext = createContext<GeoContextProps>({
  setSelectedLocation: () => {},
  selectedLocation: defaultLocation,
});

export const GeoProvider = ({ children }: PropsWithChildren<{}>) => {
  const [selectedLocation, setSelectedLocation] =
    useState<GeoLocation>(defaultLocation);

  useLayoutEffect(() => {
    const { search } = window.location;
    if (search) {
      const params = new URLSearchParams(search);
      const unit = params.get('unit');
      if (unit === 'imperial' || unit === 'metric') {
        localStorage.setItem('unit', unit);
      }
    }
  }, []);

  const value = useMemo(
    () => ({ selectedLocation, setSelectedLocation }),
    [selectedLocation, setSelectedLocation]
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
