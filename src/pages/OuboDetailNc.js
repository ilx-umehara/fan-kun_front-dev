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
  color: '#0047a4',
  padding: theme.spacing(1),
  textAlign: 'center',
  borderRadius: "0.25rem",
  minWidth: '580px',
}));

function OuboDetailNc() {
  return (
    <>
      <Header />
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{px:5}}>
            <Grid item xs={5}>
              <Item css={responsive.basicInfo}>
                <BasicInformation />
              </Item>
            </Grid>
            <Grid item xs={7}>
              <Item>
                <div className="contentBlock">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et tellus ex. Duis sagittis nunc in purus scelerisque, eget egestas eros congue. In vel elementum purus. Nunc quis aliquam nulla, a tincidunt mi. Sed vulputate porttitor lectus, ac mattis orci gravida sollicitudin.
Morbi non mauris eget lorem lacinia tristique ac at leo. Fusce rhoncus libero massa, ut dapibus ante suscipit ut. Etiam nunc nunc, blandit et ultricies finibus, congue ac enim. Quisque tempor imperdiet sem eget ultricies. Integer iaculis lorem arcu, ut volutpat enim molestie in. Quisque fermentum pulvinar orci quis bibendum. Curabitur nec ligula tellus. Aliquam eleifend fermentum quam sed aliquet.```</p>
                </div>
              </Item>
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

const responsive = {
  basicInfo:{
    minWidth: '580px',
    "@media screen and (max-width:1500px)": {
      width: "38.66666666666667vw",
    },
  }
}

export default OuboDetailNc;