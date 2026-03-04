import type { FC } from 'react';
import { useEffect } from 'react';

import { Backdrop, CircularProgress } from '@mui/material';

interface LoaderProps {
  isOverlay?: boolean;
}

const Loader: FC<LoaderProps> = ({ isOverlay = true }) => {
  useEffect(() => {
    if (!isOverlay) return;

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOverlay]);

  return (
    <>
      {isOverlay && (
        <Backdrop
          open={true}
          sx={(theme) => ({
            zIndex: theme.zIndex.backdrop
          })}
        />
      )}
      <CircularProgress
        color="primary"
        sx={(theme) => ({
          zIndex: theme.zIndex.loader
        })}
      />
    </>
  );
};

export default Loader;
