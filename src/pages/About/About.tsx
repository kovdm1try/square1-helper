import { Box, Typography } from '@mui/material';
import classNames from 'classnames';

import SquareWrapper from '@/components/Square/SquareWrapper';

import styles from './About.module.scss';

const About = () => {
  return (
    <Box className={styles.about}>
      <Typography variant="body1">
        Welcome to <b className={styles.important}>Square-1 Helper</b> — a site made by a Square-1 enthusiast, for
        Square-1 enthusiasts. Whether you occasionally forget an algorithm or want to learn something new, this is your
        handy reference.
      </Typography>
      <br />
      <Typography variant="body1">Currently in active development. Here&apos;s what&apos;s planned:</Typography>
      <Typography variant="body1" component="div">
        <ul>
          <li>
            A full dictionary of all possible top/bottom layer shapes from{' '}
            <b className={styles.important}>OBL (Orient Both Layers)</b> — orient all pieces of both layers at once
          </li>
          <li>Algorithms for solving OBL</li>
          <li>A built-in solve timer to track your progress</li>
        </ul>
      </Typography>
      <br />
      <Typography variant="body1">
        Some sections are still being built — stay tuned for updates! If you&apos;re a developer and find this project
        interesting, I&apos;d love your help. And if you&apos;d just like to show some support, I&apos;d be really glad
        if you followed me on{' '}
        <a className={classNames(styles.important, styles.link)} href="https://github.com/kovdm1try">
          GitHub
        </a>
        . Every bit of support means a lot!
      </Typography>
      <Box className={styles.cubeWrapper}>
        <SquareWrapper
          blocks={[
            { blockType: 1, color: 'y' },
            { blockType: 2, color: 'y' },
            { blockType: 1, color: 'y' },
            { blockType: 2, color: 'y' },
            { blockType: 1, color: 'y' },
            { blockType: 2, color: 'y' },
            { blockType: 1, color: 'y' },
            { blockType: 2, color: 'y' }
          ]}
          startRotate={30}
          rotateOnHover={-30}
          scale={0.9}
        />
      </Box>
    </Box>
  );
};

export default About;
