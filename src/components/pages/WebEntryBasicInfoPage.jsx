/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import ProgressBar from "../feature/WebEntry/ProgressBar";
import Footer from "./templates/Footer";
import WebEntryBasicInfo from '../feature/WebEntry/WebEntryBasicInfo';
import WebEntryNc2 from '../feature/WebEntry/WebEntryNc2';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';

import ReadingBar from '../parts/progressBar/ReadingBar';



function WebEntryBasicInfoPage () {

  const handleClickBtn = () => {
    window.scroll({top: 0});
  }

  return (
    <>
      <ReadingBar/>
      <Box sx={{ width: '100%', mt: 2 }}>
        <Grid container spacing={2} rowSpacing={2} sx={{px:5, pt: 5, display: 'flex', justifyContent: 'center'}}>
          <WebEntryBasicInfo/>
        </Grid>
        <Grid container spacing={2} rowSpacing={2} sx={{px:5, pt: 5, display: 'flex', justifyContent: 'center'}}>
        <div css={styles.btnArea}>
          <Button variant="contained" color="inherit" sx={{ mr: 10 }} onClick={handleClickBtn}>戻る</Button>
          <Button variant="contained" color="primary" sx={{ ml: 10 }} onClick={handleClickBtn}>
            <Link to="/web_entry/nc_2" css={styles.link}>次へ</Link>
          </Button>
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
  },
  link:{
    color: '#FFFFFF'
  },
}

export default WebEntryBasicInfoPage;