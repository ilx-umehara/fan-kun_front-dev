/** @jsxImportSource @emotion/react */
import React from "react";
import { styled } from '@mui/material/styles';

import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import StyledMuiPaper from '../../parts/surface/StyledMuiPaper';

function LinearProgressWithLabel(props) {
  return (

    <StyledMuiPaper css={styles.responsiveStyle}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ minWidth: 35, mr: 1 }}>
          <Typography sx={{ fontSize: '0.625rem', color: '#FFF'}}>達成度</Typography>
        </Box>
        <Box sx={{ width: '80%', mr: 1 }}>
          <LinearProgress variant="determinate" {...props} color="inherit" sx={{ color: '#98F794' }}/>
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" sx={{ color: '#98F794' }}>{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
      </Box>
    </StyledMuiPaper>

  )
}

const styles = {
  responsiveStyle:{
    width: '60%',
    "@media (max-width:700px)":{
      width: '80%',
    },
    overflow: 'hidden',
    textAlign: 'left',
    marginTop: '5px',
    background: '#0063E6',
    borderRadius: '30px',
    // display: 'flex',
    // justifyContent: 'space-between',

  },
  progressBarArea: {

    display: 'flex',
    justifyContent: 'center',
    margin: '0 auto',
    
  }
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

export default function ProgressBar() {
  const [progress, setProgress] = React.useState(10);
  const pageNum = 2
  React.useEffect(() => {
    const timer = pageNum;
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <Box sx={{ width: '100%' }} css={styles.progressBarArea}>
      <LinearProgressWithLabel value={progress} />
    </Box>
  );
}


