import { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { Footer } from '../Footer';

export const Layout: FC = () => {
  return (
    <>
      <Header />

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>

      <Footer />
    </>
  );
};
