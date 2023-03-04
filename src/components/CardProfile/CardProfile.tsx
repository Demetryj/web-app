import { FC } from 'react';
import { Box, Typography, Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { logOut } from '../../redux/auth/authSlice';

export const CardProfile: FC = () => {
  const { userName } = useAppSelector(state => state.auth.user);
  const dispatch = useAppDispatch();

  const { t } = useTranslation();

  const handleLogOut = () => {
    localStorage.removeItem('user');
    dispatch(logOut());
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mx: 'auto',
        pb: 1,
        maxWidth: 300,
        border: '1px solid #1976d2',
        borderRadius: 4,
      }}
    >
      <PersonIcon color="primary" sx={{ width: 260, height: 180 }} />
      <Typography variant="h6" color="prymary" sx={{ mb: 2 }}>
        {userName}
      </Typography>
      <Button variant="outlined" onClick={handleLogOut}>
        {t('profile.logoutBtn')}
      </Button>
    </Box>
  );
};
