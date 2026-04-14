import { useNavigate, useParams } from 'react-router-dom';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Box, Button, Typography } from '@mui/material';

import styles from './ErrorPage.module.scss';

const ErrorPage = () => {
  const navigate = useNavigate();
  const { err } = useParams();

  return (
    <Box className={styles.errorPageWrapper}>
      <Box className={styles.errorPageHeader}>
        <Button variant="text" color="primary" onClick={() => navigate('/')} className={styles.backButton}>
          <ArrowBackIosNewIcon fontSize="large" className={styles.icon} />
        </Button>
      </Box>
      <Box className={styles.content}>
        <Box className={styles.message}>
          <Typography component="div" className={styles.errorNumber}>
            {err}
          </Typography>
          <Typography component="div" className={styles.description}>
            Something went wrong...
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ErrorPage;
