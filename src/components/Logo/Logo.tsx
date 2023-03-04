import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';

export const Logo: FC = () => {
  return (
    <Link
      component={RouterLink}
      to="/"
      sx={{
        flexGrow: { xs: 1, md: 0 },
        mr: { md: 10 },
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: 700,
        fontSize: 28,
        textDecoration: 'none',
      }}
    >
      WebAPP
    </Link>
  );
};
