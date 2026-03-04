import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Loader from '@/components/Loader';

export const SuspenseLayout = () => (
  <Suspense fallback={<Loader />}>
    <Outlet />
  </Suspense>
);
