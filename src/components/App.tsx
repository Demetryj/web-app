import { FC, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { refreshUser } from '../redux/auth/authSlice';

const HomePage = lazy(() => import('../pages/Home'));
const NewsPage = lazy(() => import('../pages/News'));
const ProfilePage = lazy(() => import('../pages/Profile'));

export const App: FC = () => {
  const dispatch = useAppDispatch();

  dispatch(refreshUser());

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="news" element={<NewsPage />} />
        <Route
          path="profile"
          element={
            <PrivateRoute
              redirectTo="/"
              component={<ProfilePage />}
            ></PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
};
