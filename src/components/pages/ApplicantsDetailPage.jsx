import React from "react";
import { styled } from "@mui/material/styles";
import Header from "./templates/Header"
import Footer from "./templates/Footer"
import ApplicantsBasicInfo from "../feature/ApplicantsDetail/ApplicantsBasicInfo";
import ApplicantProgressStatus from "../feature/ApplicantsDetail/ApplicantsProgressStatus";
import ApplicantsEntryInfo from "../feature/ApplicantsDetail/ApplicantsEntryInfo";
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

function ApplicantsDetailPage() {
  return (
    <>
      <Header />

      <Box sx={{ width: '100%' }}>
        <Grid container spacing={2} rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }} sx={{px:5}}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={5}>
              <Item>
                <ApplicantsBasicInfo />
              </Item>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={7}>
              <Item>
                <ApplicantProgressStatus />
              </Item>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={7}>
                <Item>
                  <ApplicantsEntryInfo />
                </Item>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={5}>
                <Item>3</Item>
            </Grid>
        </Grid>
      </Box>
      
      <Footer />
    </>
  );
}



export default ApplicantsDetailPage;