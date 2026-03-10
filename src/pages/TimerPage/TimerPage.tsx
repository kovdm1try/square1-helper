import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { Box, Button, Grid, Paper } from '@mui/material';

import styles from './TimerPage.module.scss';
import { fetchScramble, setScramble } from '@/store/slices/timerSlice';
import type { AppDispatch, RootState } from '@/store/store';

const TimerPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const scramble = useSelector((state: RootState) => state.timer.scramble);
  const prevScramble = useSelector((state: RootState) => state.timer.prevScramble);
  const waitScrambleLoad = useSelector((state: RootState) => state.timer.waitScrambleLoad);

  useEffect(() => {
    dispatch(fetchScramble());
  }, [dispatch]);

  return (
    <Box className={styles.timerPageWrapper}>
      <Paper className={styles.scrambleHandler} elevation={0}>
        {scramble}
      </Paper>
      <Box className={styles.buttonsWrapper}>
        <Grid container className={styles.scrambleButtons}>
          <Button
            className={styles.actionButton}
            variant="outlined"
            color="primary"
            disabled={!prevScramble}
            endIcon={<ArrowBackIcon />}
            onClick={() => dispatch(setScramble(prevScramble))}
          >
            Previous Scramble
          </Button>
          <Button
            className={styles.actionButton}
            variant="contained"
            color="primary"
            endIcon={<AutorenewIcon />}
            disabled={waitScrambleLoad}
            onClick={() => dispatch(fetchScramble())}
          >
            New Scramble
          </Button>
        </Grid>
      </Box>
    </Box>
  );
};

export default TimerPage;
