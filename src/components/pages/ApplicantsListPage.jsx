import React from "react";
import Header from "./templates/Header";
import Footer from "./templates/Footer";
import ApplicantsSearch from "../feature/ApplicantsList/ApplicantsSearch";
import ApplicantsList from "../feature/ApplicantsList/ApplicantsList";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function ApplicantsListPage() {
  return (
    <>
      <Header headerTitle='応募者一覧画面'/>
      <Box sx={{ width: '100%' }}>
        <Grid container spacing={2} rowSpacing={2} sx={{px:10}}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <ApplicantsSearch />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <ApplicantsList/>
          </Grid>
        </Grid>
      </Box>
      <Footer/>
    </>
  );
}

export default ApplicantsListPage;