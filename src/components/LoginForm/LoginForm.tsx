import { FC, useState, forwardRef, ChangeEvent, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button, Alert } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { logIn } from '../../redux/auth/authSlice';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  p: { xs: 2, sm: 3 },
  width: { xs: 300, sm: 400 },
  bgcolor: 'background.paper',
  boxShadow: 24,
};

const USER_NAME = 'admin';
const PASSWORD = '12345';

interface ILoginFormaProps {
  closeModal: () => void;
}

export const LoginForm: FC<ILoginFormaProps> = forwardRef(
  ({ closeModal }, ref) => {
    const [userName, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<boolean>(false);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { t } = useTranslation();

    const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;

      switch (name) {
        case 'userName':
          setUserName(value);
          break;
        case 'password':
          setPassword(value);
          break;

        default:
          return;
      }
    };

    const handleSubmit = (event: MouseEvent<HTMLElement>) => {
      event.preventDefault();

      if (userName !== USER_NAME || password !== PASSWORD) {
        setError(true);
        return;
      }

      localStorage.setItem('user', JSON.stringify({ userName }));
      dispatch(logIn({ userName }));
      closeModal();
      navigate('profile');
    };

    return (
      <Box id="modal-form" sx={style}>
        <TextField
          id="userName"
          label={t('formLogin.username')}
          type="text"
          name="userName"
          value={userName}
          fullWidth
          margin="dense"
          autoFocus
          autoComplete="off"
          onChange={handleChangeInput}
        />
        <TextField
          id="password"
          label={t('formLogin.password')}
          type="password"
          name="password"
          value={password}
          fullWidth
          autoComplete="off"
          onChange={handleChangeInput}
        />

        {error && <Alert severity="error">{t('formLogin.error')}</Alert>}

        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button type="submit" onClick={handleSubmit}>
            {t('formLogin.submitBtn')}
          </Button>
          <Button onClick={closeModal}>{t('formLogin.closeBtn')}</Button>
        </Box>
      </Box>
    );
  }
);
