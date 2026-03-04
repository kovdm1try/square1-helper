import { Navigate, useRoutes } from 'react-router-dom';

import BaseLayout from '@/layouts/BaseLayout';
import About from '@/pages/About';
import ErrorPage from '@/pages/ErrorPage';

const Navigation = () => {
  const routes = [
    {
      element: <BaseLayout />,
      children: [
        { index: true, path: '/', element: <Navigate to="/about" replace /> },
        { path: 'about', element: <About /> }
      ]
    },
    {
      path: 'error/:err',
      element: <ErrorPage />
    },
    {
      path: '*',
      element: <Navigate to="/error/404" replace />
    }
  ];

  return useRoutes(routes);
};

export default Navigation;
