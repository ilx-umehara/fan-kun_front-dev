import React from "react";
import Header from "./templates/Header";
import Footer from "./templates/Footer";
import ApplicantsList from "../feature/ApplicantsList/ApplicantsList";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function ApplicantsListPage() {
  return (
    <>
      <Header headerTitle='応募者一覧画面'/>
      <ApplicantsList/>
      <Footer/>
    </>
  );
}

export default ApplicantsListPage;