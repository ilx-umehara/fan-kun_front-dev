import React from "react";
import Header from "./templates/Header"
import Footer from "./templates/Footer"
import ApplicantsBasicInfo from "../feature/ApplicantsDetail/ApplicantsBasicInfo";
import ApplicantProgressStatus from "../feature/ApplicantsDetail/ApplicantsProgressStatus";
import ApplicantsEntryInfo from "../feature/ApplicantsDetail/ApplicantsEntryInfo";
import ApplicantsContactHistory from "../feature/ApplicantsDetail/ApplicantsContactHistory";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";



function ApplicantsDetailPage() {
  return (
    <>
      <Header />
      <Box sx={{ width: '100%' }}>
        <Grid container spacing={2} rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }} sx={{px:5}}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={5}>
              <ApplicantsBasicInfo />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={7}>
              <ApplicantProgressStatus />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={7}>
                <ApplicantsEntryInfo />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={5}>
            <ApplicantsContactHistory />
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
}



export default ApplicantsDetailPage;