import React from "react";
import { styled } from "@mui/material/styles";
import Header from "../components/templates/Header"
import Footer from "../components/templates/Footer"
import BasicInformation from "../components/BasicInformation";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  padding: theme.spacing(1),
  textAlign: 'center',

  borderRadius: "0.25rem"
}));

function OuboDetailOs() {
  return (
    <>
      <Header />
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{px:5}}>
            <Grid item xs={12}>
              <Box>
                <BasicInformation />
              </Box>
            </Grid>
            <Grid item xs={7}>
                <Item>2</Item>
            </Grid>
            <Grid item xs={5}>
                <Item>3</Item>
            </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
}

export default OuboDetailOs;