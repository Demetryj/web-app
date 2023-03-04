import { FC, useState, MouseEvent } from 'react';
import { Button, Menu, MenuItem, Typography } from '@mui/material';
import TranslateIcon from '@mui/icons-material/Translate';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useTranslation } from 'react-i18next';
import { getCurrentLang } from '../../helpers/getCurrentLang';

const langList = ['English', 'Ukrainian'];

export const Languages: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string): void => {
    i18n.changeLanguage(language);
  };

  const handleOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    const currentLeng = getCurrentLang(event.currentTarget.textContent);

    setAnchorEl(null);

    switch (currentLeng) {
      case 'En':
        changeLanguage('en');
        return;

      case 'Uk':
        changeLanguage('uk');
        return;
    }
  };

  return (
    <div>
      <Button
        id="translations"
        aria-controls={open ? 'languages' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="text"
        disableElevation
        onClick={handleOpen}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{ p: 1.5, textTransform: 'none', fontSize: { xs: 10, sm: 14 } }}
      >
        <TranslateIcon color="primary" sx={{ mr: 0.5 }} />
        {t('translations')}
      </Button>
      <Menu
        id="translations"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClick}
      >
        {langList.map(lang => (
          <MenuItem key={lang} onClick={handleClick} disableRipple>
            <Typography color="text.primary">{lang}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
