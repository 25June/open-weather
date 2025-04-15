import { SxProps } from '@mui/material';

export const container: SxProps = {
  maxWidth: 375,
  width: '100%',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  marginTop: '2rem',
};

export const historyItem: SxProps = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0rem 1rem',
  cursor: 'pointer',
  border: '1px solid #e0e0e0',
  borderRadius: '0.5rem',
  ':hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
};

export const noHistory: SxProps = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  padding: '1rem',
};
