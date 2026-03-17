import { Navigate, useRoutes } from 'react-router-dom';

import BaseLayout from '@/layouts/BaseLayout';
import About from '@/pages/About';
import AlgorithmSectionPage from '@/pages/AlgorithmSectionPage';
import AlgorithmsPage from '@/pages/AlgorithmsPage';
import ErrorPage from '@/pages/ErrorPage';
import TimerPage from '@/pages/TimerPage';

const Navigation = () => {
  const routes = [
    {
      element: <BaseLayout />,
      children: [
        { index: true, path: '/', element: <Navigate to="/about" replace /> },
        { path: '/algorithms', element: <AlgorithmSectionPage /> },
        { path: '/algorithms/cs', element: <AlgorithmsPage sectionName="cs" /> },
        { path: '/algorithms/co', element: <AlgorithmsPage sectionName="co" /> },
        { path: '/algorithms/eo', element: <AlgorithmsPage sectionName="eo" /> },
        { path: '/algorithms/obl', element: <AlgorithmsPage sectionName="obl" /> },
        { path: '/algorithms/cp', element: <AlgorithmsPage sectionName="cp" /> },
        { path: '/algorithms/ep', element: <AlgorithmsPage sectionName="ep" /> },
        { path: '/algorithms/parity', element: <AlgorithmsPage sectionName="parity" /> },
        { path: '/algorithms/csp', element: <AlgorithmsPage sectionName="csp" /> },
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
