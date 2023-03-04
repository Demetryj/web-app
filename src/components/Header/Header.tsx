import { FC, useState } from 'react';
import {
  AppBar,
  Container,
  Toolbar,
  Button,
  Box,
  LinearProgress,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../hooks/useAppSelector';
import { Logo } from '../Logo';
import { BurgerMenuNavigation } from '../BurgerMenuNavigation';
import { HeaderNavigation } from '../HeaderNavigation';
import { Languages } from '../Languages';
import { ModalWindow } from '../Modal';
import { LoginForm } from '../LoginForm';

export const Header: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const {
    auth: { isLoggedIn },
    news: { isLoading },
  } = useAppSelector(state => state);

  const { t } = useTranslation();

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <AppBar
        position="fixed"
        color="inherit"
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          boxShadow: 'none',
        }}
      >
        <Container>
          <Toolbar
            disableGutters
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <BurgerMenuNavigation />
            <Logo />
            <HeaderNavigation />

            {!isLoggedIn && (
              <Button
                variant="text"
                onClick={handleOpenModal}
                sx={{
                  display: { xs: 'none', md: 'block' },
                  p: 1.5,
                  fontSize: { md: 16 },
                  textTransform: 'none',
                }}
              >
                {t('login')}
              </Button>
            )}

            <Languages />
          </Toolbar>
        </Container>

        {isLoading && (
          <Box sx={{ width: '100%', position: 'absolute' }}>
            <LinearProgress />
          </Box>
        )}
      </AppBar>

      <ModalWindow isModalOpen={isModalOpen} closeModal={handleCloseModal}>
        <LoginForm closeModal={handleCloseModal} />
      </ModalWindow>
    </>
  );
};
