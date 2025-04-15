import { Autocomplete, Box, CircularProgress, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import { memo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GeoLocation } from 'models/geoLocation';
import { useSearchLocation } from 'hooks/useSearchLocation';
import { useGetHistorySearch } from 'src/hooks/useGetHistorySearch';
import { debounce } from 'utils/debounce';
import * as styles from './styles';

const SearchCity = () => {
  const {
    loading,
    locations,
    onSearchLocation,
    setSelectedLocation,
    selectedLocation,
  } = useSearchLocation();
  const navigate = useNavigate();
  const { addHistorySearch } = useGetHistorySearch();

  useEffect(() => {
    if (selectedLocation) {
      navigate('/result');
    }
  }, [selectedLocation]);

  return (
    <Autocomplete
      color="secondary"
      sx={styles.autocomplete}
      options={locations}
      getOptionLabel={(option: GeoLocation) =>
        `${option.name}, ${option.country}`
      }
      value={selectedLocation || null}
      autoComplete
      filterOptions={(x) => x}
      renderOption={(props, option: GeoLocation) => {
        return (
          <Box
            component={'li'}
            sx={styles.option}
            {...props}
            key={option.lat.toString()}
          >
            {option.name}, {option.country}
          </Box>
        );
      }}
      onChange={(_, newValue) => {
        if (newValue) {
          setSelectedLocation(newValue);
          addHistorySearch(newValue);
          navigate('/result');
        }
      }}
      onInputChange={debounce((_, newInputValue) => {
        onSearchLocation(newInputValue);
      }, 300)}
      id="option-autocomplete"
      loading={loading}
      noOptionsText={'No search result. Please try again.'}
      popupIcon={loading ? <CircularProgress size={24} /> : <SearchIcon />}
      forcePopupIcon={true}
      renderInput={(params) => (
        <TextField
          {...params}
          onClick={() => navigate('/history')}
          label="Location"
          placeholder="Enter location name"
          slotProps={{
            input: {
              ...params.InputProps,

              startAdornment: <LocationPinIcon sx={styles.locationIcon} />,
            },
          }}
        />
      )}
    />
  );
};

export default memo(SearchCity);
