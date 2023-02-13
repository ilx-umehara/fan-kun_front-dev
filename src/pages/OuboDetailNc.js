import React from "react";
import { styled } from "@mui/material/styles";
import Header from "../components/templates/Header"
import Footer from "../components/templates/Footer"
import BasicInformation from "../components/BasicInformation";
import ApplicantStatus from "../components/ApplicantStatus";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  color: '#0047a4',
  padding: theme.spacing(1),
  textAlign: 'center',
  borderRadius: "0.25rem",
}));

function OuboDetailNc() {
  return (
    <>
      <Header />
      <Box sx={{ width: '100%' }}>
        <Grid container spacing={2} rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 2, xl: 2 }} sx={{px:5}}>
            <Grid item xs={12} sm={12} md={12} lg={5} xl={5}>
              <Item>
                <BasicInformation />
              </Item>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={7} xl={7}>
              <Item>
                <ApplicantStatus />
              </Item>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={7} xl={7}>
                <Item>2</Item>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={5} xl={5}>
                <Item>3</Item>
            </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
}



export default OuboDetailNc;