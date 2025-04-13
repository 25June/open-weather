import { SxProps, autocompleteClasses } from '@mui/material';

export const option: SxProps = {
  width: '100%',
  ':hover': {
    color: '#0EABDB',
    cursor: 'pointer',
  },
};

export const autocomplete: SxProps = {
  marginTop: '0.25rem',
  [`& .${autocompleteClasses.popupIndicator}`]: {
    transform: 'none',
  },
};

export const locationIcon: SxProps = {
  color: 'text.secondary',
  marginRight: '0.5rem',
};
