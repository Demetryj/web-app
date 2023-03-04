import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, Tab } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useRouteMatch } from '../../hooks/useRouteMatch';

const pathesNav = ['/', 'news', 'profile'];

export const HeaderNavigation: FC = () => {
  const routeMatch = useRouteMatch(pathesNav);
  const currentTab = routeMatch?.pattern?.path;

  const { t } = useTranslation();

  return (
    <Tabs
      value={currentTab}
      component="nav"
      textColor="primary"
      indicatorColor="primary"
      sx={{ flexGrow: { md: 1 }, display: { xs: 'none', md: 'flex' } }}
    >
      <Tab
        label={t('navigation.home')}
        value="/"
        to="/"
        component={Link}
        sx={{ fontSize: 16, fontWeight: 700, textTransform: 'none' }}
      />
      <Tab
        label={t('navigation.news')}
        value="news"
        to="news"
        component={Link}
        sx={{ fontSize: 16, fontWeight: 700, textTransform: 'none' }}
      />
      <Tab
        label={t('navigation.profile')}
        value="profile"
        to="profile"
        component={Link}
        sx={{ fontSize: 16, fontWeight: 700, textTransform: 'none' }}
      />
    </Tabs>
  );
};
