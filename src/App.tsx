import React, { FC } from 'react';
import { Outlet } from "react-router-dom";
import Layout from './components/Layout';

interface ComponentProps {
}

const App: FC<ComponentProps> = () => {
  return (
    <Layout maxWidth="xl">
      <Outlet />
    </Layout>
  );
}

export default App;
