import { Box } from '@mui/material';
import SearchCity from 'components/SearchCity/SearchCity';
import * as styles from './styles';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <Box sx={styles.container}>
      <SearchCity />
      <Outlet />
    </Box>
  );
};

export default Layout;
