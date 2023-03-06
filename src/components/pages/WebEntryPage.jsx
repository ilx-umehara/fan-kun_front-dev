/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';

import ProgressBar from "../feature/WebEntry/ProgressBar";
import Footer from "./templates/Footer";
import WebEntryBasicInfo from '../feature/WebEntry/WebEntryBasicInfo';
import WebEntryNc2 from '../feature/WebEntry/WebEntryNc2';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';



const WebEntryPage = () => {


  const [count, setCount] = useState(0);

  const handleClickPrevBtn = () => {
    window.scroll({top: 0});
    setCount((prevCount) => prevCount - 1);
  }

  const handleClickNextBtn = () => {
    window.scroll({top: 0});
    setCount((prevCount) => prevCount + 1);
  };

  const entryForm = 
    count === 0 
    ? <WebEntryBasicInfo/>
    : count === 1 ? <WebEntryNc2/>: <ProgressBar/>;
  console.log(count);
  return (
    <>
      <Box sx={{ width: '100%', }} css={styles.progressBarBox}>
        <Grid container spacing={2} rowSpacing={2} sx={{px:5, pt: 1, display: 'flex', justifyContent: 'center'}}>
          <ProgressBar />
        </Grid>
      </Box>
      
      <Box sx={{ width: '100%', mt: 3 }}>
        <Grid container spacing={2} rowSpacing={2} sx={{px:5, pt: 5, display: 'flex', justifyContent: 'center'}}>
          {entryForm}
        </Grid>
        <Grid container spacing={2} rowSpacing={2} sx={{px:5, pt: 5, display: 'flex', justifyContent: 'center'}}>
        <div css={styles.btnArea}>
          <Button variant="contained" color="inherit" sx={{ mr: 10 }} onClick={handleClickPrevBtn}>戻る</Button>
          <Button variant="contained" color="primary" sx={{ ml: 10 }} onClick={handleClickNextBtn}>次へ</Button>
        </div>
        </Grid>
      </Box>
      <Footer/>
    </>
  )
}

const styles = {
  progressBarBox: {
    position: 'fixed',
    zIndex: '30',
  }
}

export default WebEntryPage;