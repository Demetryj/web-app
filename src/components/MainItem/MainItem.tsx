import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import Filter1Icon from '@mui/icons-material/Filter1';

export const MainItem: FC = () => {
  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Filter1Icon color="primary" sx={{ mb: 1.5, width: 260, height: 180 }} />

      <Typography variant="h6" color="primary">
        Lorem
      </Typography>
      <Typography sx={{ textAlign: 'center' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
        corrupti asperiores autem.
      </Typography>
    </Box>
  );
};
