import { FC } from 'react';
import { Container } from '@mui/material';
import { MainList } from '../components/MainList';

const Home: FC = () => {
  return (
    <main>
      <Container maxWidth="lg" sx={{ pt: 8.5, pb: 3 }}>
        <MainList />
      </Container>
    </main>
  );
};

export default Home;
