import { useState, useCallback } from 'react';
import { getGeoCode } from 'services/api';
import { GeoLocation } from 'models/geoLocation';
import { useGeoContext } from 'contexts/GeoContext';
import { defaultLocation } from 'assets/mock/defaultLocation';

export const useSearchLocation = () => {
  const { setSelectedLocation, selectedLocation } = useGeoContext();
  const [locations, setLocations] = useState<GeoLocation[]>([defaultLocation]);
  const [searching, setSearching] = useState<boolean>(false);

  const handleSearchLocations = useCallback((value: string) => {
    if (!value) {
      setLocations([]);
      return;
    }
    setSearching(true);
    getGeoCode(value)
      .then((data) => {
        setLocations(() => data);
      })
      .finally(() => {
        setSearching(false);
      });
  }, []);

  return {
    loading: searching,
    locations: locations,
    onSearchLocation: handleSearchLocations,
    selectedLocation,
    setSelectedLocation,
  };
};
