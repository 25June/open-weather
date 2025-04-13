import { SxProps } from '@mui/material';

export const container: SxProps = {
  backgroundColor: '#f0f8ff',
  borderRadius: 2,
  padding: 3,
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  width: '100%',
  boxSizing: 'border-box',
};

export const time: SxProps = {
  fontSize: '1rem',
  color: '#333',
  marginBottom: 1,
};
export const temperature: SxProps = {
  fontSize: '2.5rem',
  fontWeight: 'bold',
  color: '#222',
};

export const description: SxProps = { fontSize: '0.825rem', color: '#555' };
export const humidity: SxProps = {
  fontSize: '1rem',
  fontWeight: 'bold',
  color: '#333',
};
export const humidityLabel: SxProps = { fontSize: '0.875rem', color: '#666' };
export const windsLabel: SxProps = { fontSize: '0.875rem', color: '#666' };
export const winds: SxProps = {
  fontSize: '1rem',
  fontWeight: 'bold',
  color: '#333',
};

export const visibilityLabel: SxProps = { fontSize: '0.875rem', color: '#666' };
export const visibility: SxProps = {
  fontSize: '1rem',
  fontWeight: 'bold',
  color: '#333',
};
