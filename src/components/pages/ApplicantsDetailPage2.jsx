import React from "react";
import Header from "./templates/Header"
import Footer from "./templates/Footer"
import ApplicantsBasicInfo2 from "../feature/ApplicantsDetail/ApplicantsBasicInfo2";
import ApplicantProgressStatus2 from "../feature/ApplicantsDetail/ApplicantsProgressStatus2";
import ApplicantsEntryInfo2 from "../feature/ApplicantsDetail/ApplicantsEntryInfo2";
import ApplicantsContactHistory2 from "../feature/ApplicantsDetail/ApplicantsContactHistory2";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";



const ApplicantsDetailPage2 = () => {
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
      <Header headerTitle='応募者管理画面'/>
      <Box sx={{ width: '100%', mt: 6, mb: 2, }}>
        <Grid container spacing={1} rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 2, xl: 2 }} sx={{px:10}}>
          <Grid item xs={12} sm={12} md={12} lg={4} xl={4} sx={{ display: 'flex', flexDirection: 'column' }}>
            <ApplicantsBasicInfo2 />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={8} xl={8} sx={{ display: 'flex', flexDirection: 'column' }}>
            <ApplicantsEntryInfo2 />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={3} xl={3} sx={{ display: 'flex', flexDirection: 'column' }}>
            <ApplicantProgressStatus2 />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={9} xl={9} sx={{ display: 'flex', flexDirection: 'column' }}>
            <ApplicantsContactHistory2 />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}



export default ApplicantsDetailPage2;