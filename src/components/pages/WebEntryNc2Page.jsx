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



function WebEntryNc2Page() {
  const handleClickBtn = () => {
    window.scroll({top: 0});
  }
  return (
    <>
      <ReadingBar/>
      <Box sx={{ width: '100%' }}>
        <Grid container sx={{ pt: 1, }} css={styles.webEntryContainer}>
          <WebEntryNc2/>
        </Grid>

      </Box>
      <Footer/>
    </>
  )
}

const styles = {
  webEntryContainer: {
    padding: '0 1rem',
    display: 'flex',
    justifyContent: 'center'
  },
  progressBarBox: {
    position: 'fixed',
    zIndex: '30',
  },
  link:{
    color: '#FFFFFF'
  },
}

export default WebEntryNc2Page;