import { FC, ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/useAppSelector';

interface IPrivateRouteProps {
  component: ReactElement;
  redirectTo: string;
}

export const PrivateRoute: FC<IPrivateRouteProps> = ({
  component: Component,
  redirectTo,
}) => {
  const { isLoggedIn } = useAppSelector(state => state.auth);

  return !isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
