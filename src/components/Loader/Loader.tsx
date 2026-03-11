import type { FC } from 'react';
import { useEffect } from 'react';

import { Backdrop, CircularProgress } from '@mui/material';
import classNames from 'classnames';

import styles from './Loader.module.scss';

interface LoaderProps {
  isOverlay?: boolean;
}

const Loader: FC<LoaderProps> = ({ isOverlay = true }) => {
  useEffect(() => {
    if (!isOverlay) return;

    document.body.style.overflow = 'hidden';
    document.body.inert = true;

    return () => {
      document.body.style.overflow = '';
      document.body.inert = false;
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
          className={classNames({ [styles.blur]: isOverlay })}
        />
      )}
      <CircularProgress
        color="primary"
        sx={(theme) => ({
          zIndex: theme.zIndex.loader
        })}
        className={classNames({ [styles.centredAbsolute]: isOverlay })}
      />
    </>
  );
};

export default Loader;
