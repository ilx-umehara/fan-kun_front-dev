/** @jsxImportSource @emotion/react */
import React from "react";

import Footer from "./templates/Footer";
import WebEntryBasicInfo from '../feature/WebEntry/WebEntryBasicInfo';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";


const WebEntryPage = () => {
  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Grid container spacing={2} rowSpacing={2} sx={{px:5, display: 'flex', justifyContent: 'center'}}>
          <WebEntryBasicInfo/>
        </Grid>


      </Box>
      <Footer/>
    </>
  )
}

export default WebEntryPage;