/** @jsxImportSource @emotion/react */
import React from "react";

import ProgressBar from "../feature/WebEntry/ProgressBar";
import Footer from "./templates/Footer";
import WebEntryBasicInfo from '../feature/WebEntry/WebEntryBasicInfo';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";


const WebEntryPage = () => {
  return (
    <>
      <ProgressBar />
      <Box sx={{ width: '100%', mt: 5 }}>
        <Grid container spacing={2} rowSpacing={2} sx={{p:5, display: 'flex', justifyContent: 'center'}}>
          <WebEntryBasicInfo/>
        </Grid>

      </Box>
      <Footer/>
    </>
  )
}

export default WebEntryPage;