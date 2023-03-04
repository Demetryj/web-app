import { FC } from 'react';
import { Container } from '@mui/material';
import { CardProfile } from '../components/CardProfile';

const Profile: FC = () => {
  return (
    <main>
      <Container maxWidth="lg" sx={{ pt: 8.5, pb: 3, height: '85vh' }}>
        <CardProfile />
      </Container>
    </main>
  );
};

export default Profile;
