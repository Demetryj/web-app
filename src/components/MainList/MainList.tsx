import { FC } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { MainItem } from '../MainItem';

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const MainList: FC = () => {
  return (
    <Grid container spacing={4} component="ul" sx={{ listStyle: 'none', p: 0 }}>
      {items.map(item => (
        <Grid key={item} component="li" xs={12} sm={6} md={4}>
          <MainItem />
        </Grid>
      ))}
    </Grid>
  );
};
