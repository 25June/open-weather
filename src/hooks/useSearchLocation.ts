import { useState, useCallback, useEffect } from 'react';
import { getGeoCode } from 'services/api';
import { GeoLocation } from 'models/geoLocation';
import { useGeoContext } from 'contexts/GeoContext';
import { defaultLocation } from 'assets/mock/defaultLocation';

export const useSearchLocation = () => {
  const { setGeoLocation } = useGeoContext();
  const [locations, setLocations] = useState<GeoLocation[]>([defaultLocation]);
  const [searching, setSearching] = useState<boolean>(false);
  const [selectedLocation, setSelectedLocation] =
    useState<GeoLocation>(defaultLocation);
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

  useEffect(() => {
    if (selectedLocation) {
      setGeoLocation(selectedLocation.lon, selectedLocation.lat);
    }
  }, [selectedLocation]);

  return {
    loading: searching,
    locations: locations,
    onSearchLocation: handleSearchLocations,
    selectedLocation,
    setSelectedLocation,
  };
};
