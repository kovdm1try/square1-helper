import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { Box, Button, Grid, Paper } from '@mui/material';
import classNames from 'classnames';

import Loader from '@/components/Loader';

import styles from './TimerPage.module.scss';
import { fetchScramble, setScramble } from '@/store/slices/timerSlice';
import type { AppDispatch, RootState } from '@/store/store';

const formatTime = (ms: number) => {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  const milliseconds = ms % 1000;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(3, '0')}`;
};

const TimerPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const scramble = useSelector((state: RootState) => state.timer.scramble);
  const prevScramble = useSelector((state: RootState) => state.timer.prevScramble);
  const waitScrambleLoad = useSelector((state: RootState) => state.timer.waitScrambleLoad);

  const [timerReady, setTimerReady] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);
  const [elapsed, setElapsed] = useState(0);

  const timerStartedRef = useRef(false);
  const timerReadyRef = useRef(false);
  const scrambleRef = useRef('');
  const startTimeRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  const prevTimerStartedRef = useRef(false);

  useEffect(() => {
    timerStartedRef.current = timerStarted;
  }, [timerStarted]);

  useEffect(() => {
    if (!timerStarted && prevTimerStartedRef.current) {
      dispatch(fetchScramble());
    }
    prevTimerStartedRef.current = timerStarted;
  }, [timerStarted, dispatch]);

  useEffect(() => {
    timerReadyRef.current = timerReady;
  }, [timerReady]);

  useEffect(() => {
    scrambleRef.current = scramble;
  }, [scramble]);

  useEffect(() => {
    if (!scramble) dispatch(fetchScramble());
  }, [dispatch, scramble]);

  useEffect(() => {
    if (!timerStarted) return;

    startTimeRef.current = Date.now();

    const tick = () => {
      setElapsed(Date.now() - startTimeRef.current);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [timerStarted]);

  useEffect(() => {
    const handleDown = (e: Event) => {
      if (e instanceof KeyboardEvent && e.code !== 'Enter' && e.code !== 'Space') return;
      if (e instanceof TouchEvent || e instanceof KeyboardEvent) e.preventDefault();

      if (timerStartedRef.current) {
        setTimerStarted(false);
        return;
      }

      if (!scrambleRef.current) return;

      setTimerReady(true);
    };

    const handleUp = (e: Event) => {
      if (e instanceof KeyboardEvent && e.code !== 'Enter' && e.code !== 'Space') return;

      if (timerReadyRef.current && !timerStartedRef.current) {
        setElapsed(0);
        setTimerStarted(true);
      }
      setTimerReady(false);
    };

    window.addEventListener('mousedown', handleDown);
    window.addEventListener('touchstart', handleDown, { passive: false });
    window.addEventListener('keydown', handleDown);
    window.addEventListener('mouseup', handleUp);
    window.addEventListener('touchend', handleUp);
    window.addEventListener('keyup', handleUp);

    return () => {
      window.removeEventListener('mousedown', handleDown);
      window.removeEventListener('touchstart', handleDown);
      window.removeEventListener('keydown', handleDown);
      window.removeEventListener('mouseup', handleUp);
      window.removeEventListener('touchend', handleUp);
      window.removeEventListener('keyup', handleUp);
    };
  }, [dispatch]);

  return (
    <Box className={styles.timerPageWrapper}>
      <Paper className={styles.scrambleHandler} elevation={0} onClick={(e) => e.preventDefault()}>
        {scramble || <Loader isOverlay={false} />}
      </Paper>
      <Box className={styles.buttonsWrapper}>
        <Grid container className={styles.scrambleButtons}>
          <Button
            className={styles.actionButton}
            variant="outlined"
            color="primary"
            disabled={timerStarted || timerReady || waitScrambleLoad || !prevScramble}
            endIcon={<ArrowBackIcon />}
            onMouseDown={(e) => e.stopPropagation()}
            onTouchStart={(e) => e.stopPropagation()}
            onClick={() => dispatch(setScramble(prevScramble))}
          >
            Previous Scramble
          </Button>
          <Button
            className={styles.actionButton}
            variant="contained"
            color="primary"
            endIcon={<AutorenewIcon />}
            disabled={timerStarted || timerReady || waitScrambleLoad}
            onMouseDown={(e) => e.stopPropagation()}
            onTouchStart={(e) => e.stopPropagation()}
            onClick={() => dispatch(fetchScramble())}
          >
            New Scramble
          </Button>
        </Grid>
      </Box>
      <Box className={classNames(styles.timer, { [styles.timerReady]: timerReady })}>
        {timerReady ? '00:00.000' : formatTime(elapsed)}
      </Box>
    </Box>
  );
};

export default TimerPage;
