import { FC, useState, MouseEvent } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, IconButton, Menu, MenuItem, Link } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getPath } from '../../helpers/getPath';
import { ModalWindow } from '../Modal';
import { LoginForm } from '../LoginForm';

export const BurgerMenuNavigation: FC = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { isLoggedIn } = useAppSelector(state => state.auth);

  const { t } = useTranslation();

  const pages = [
    t('navigation.home'),
    t('navigation.news'),
    t('navigation.profile'),
  ];

  const handleOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleClick = () => {
    setAnchorElNav(null);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
    handleClick();
  };
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <Box
        component="nav"
        sx={{
          mr: 1,
          display: { xs: 'flex', md: 'none' },
        }}
      >
        <IconButton
          size="large"
          aria-label="menu of navigation"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="primary"
          onClick={handleOpen}
        >
          <MenuIcon />
        </IconButton>

        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleClick}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        >
          {pages.map(page => (
            <MenuItem key={page} onClick={handleClick}>
              <Link
                to={getPath(page)}
                component={RouterLink}
                color="text.primary"
                sx={{ textDecoration: 'none' }}
              >
                {page}
              </Link>
            </MenuItem>
          ))}

          {!isLoggedIn && (
            <MenuItem onClick={handleOpenModal}>
              <Link
                href="#"
                color="primary"
                sx={{ textDecoration: 'none', pointerEvents: 'none' }}
              >
                {t('login')}
              </Link>
            </MenuItem>
          )}
        </Menu>
      </Box>

      <ModalWindow isModalOpen={isModalOpen} closeModal={handleCloseModal}>
        <LoginForm closeModal={handleCloseModal} />
      </ModalWindow>
    </>
  );
};
