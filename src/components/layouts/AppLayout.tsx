import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../widgets';

export const AppLayout: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
