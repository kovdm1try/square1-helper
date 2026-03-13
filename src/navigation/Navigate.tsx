import { Navigate, useRoutes } from 'react-router-dom';

import BaseLayout from '@/layouts/BaseLayout';
import About from '@/pages/About';
import AlgorithmSectionPage from '@/pages/AlgorithmSectionPage';
import ErrorPage from '@/pages/ErrorPage';
import TimerPage from '@/pages/TimerPage';

const Navigation = () => {
  const routes = [
    {
      element: <BaseLayout />,
      children: [
        { index: true, path: '/', element: <Navigate to="/about" replace /> },
        { path: '/algorithms', element: <AlgorithmSectionPage /> },
        { path: '/algorithms/obl', element: <div>obl section</div> },
        { path: '/timer', element: <TimerPage /> },
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
