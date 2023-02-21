import React from "react";
import Header from "./templates/Header"
import Footer from "./templates/Footer"
import ApplicantsBasicInfo from "../feature/ApplicantsDetail/ApplicantsBasicInfo";
// import ApplicantProgressStatus from "../feature/ApplicantsDetail/ApplicantsProgressStatus";
import ApplicantsEntryInfo from "../feature/ApplicantsDetail/ApplicantsEntryInfo";
import ApplicantsContactHistory from "../feature/ApplicantsDetail/ApplicantsContactHistory";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";



function ApplicantsDetailPage() {
  // let responsiveMain;

  // const devicePixelRatio = window.devicePixelRatio;
  // console.log(devicePixelRatio);

  // if(devicePixelRatio > 1 && devicePixelRatio <= 1.25){
  //   responsiveMain = 'responsiveMain125';
  // }else if(devicePixelRatio > 1.25 && devicePixelRatio <= 1.5){
  //   responsiveMain = 'responsiveMain150';
  // }

  return (
    <>
      <Header/>
      <Box sx={{ width: '100%' }}>
        <Grid container spacing={2} rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 2, xl: 2 }} sx={{px:5}}>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <Grid container spacing={2}>
              <Grid item sx={{ width: '100%' }}>
                <ApplicantsBasicInfo />
              </Grid>
              {/* <Grid item sx={{ width: '100%' }}>
                <ApplicantProgressStatus />
              </Grid> */}
              <Grid item sx={{ width: '100%' }}>
                <ApplicantsContactHistory />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6} sx={{ display: 'flex' }}>
          <ApplicantsEntryInfo />
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
}



export default ApplicantsDetailPage;