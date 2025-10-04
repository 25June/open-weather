import { SxProps } from '@mui/material';

export const container: SxProps = {
  backgroundColor: '#f8f8f8',
  borderRadius: 1,
  padding: 2,
  boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.05)',
  width: '100%',
  boxSizing: 'border-box',
};

export const title: SxProps = {
  fontSize: '1rem',
  fontWeight: 'bold',
  color: '#333',
};

export const date: SxProps = {
  fontSize: '0.9rem',
  color: '#555',
  marginBottom: 1.5,
  marginTop: 1.5,
  textAlign: 'left',
  fontWeight: 'bold',
};

export const time: SxProps = { fontSize: '0.825rem', color: '#333' };
export const tempature: SxProps = { fontSize: '0.825rem', color: '#444' };
export const description = (loading: boolean): SxProps => ({
  fontSize: '0.825rem',
  color: '#666',
  textAlign: 'left',
  transition: 'all 0.5s ease-in-out',
  opacity: loading ? 0 : 1,
});
