/** @jsxImportSource @emotion/react */
import React, {useState} from 'react'
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import StyledMuiPaper from '../../parts/surface/StyledMuiPaper';
import RowRadioButtonsGroup from '../../parts/radio/RadioButtonsSelectGender';
import InputBirthdayAndAge from '../../parts/input/InputBirthdayAndAge';
import InputAddress from '../../parts/input/InputAddress';
import SelectedTransportation from "../../parts/select/SelectedTransportation";
import InputPhoneNumber from "./forms/InputPhoneNumber";

export const UserInputData = React.createContext();

function WebEntryConfirm(props){
  const [currentState, setCurrentState] = React.useState({});
  const value = {
      currentState,
      setCurrentState
  };

  console.log('currentState:' + currentState);
  console.log('UserInputData:' + UserInputData);

  const handleClickBtn = () => {
    window.scroll({top: 0});
  }


  return (
    <>
      <StyledMuiPaper css={styles.responsiveStyle}>
        <Grid container spacing={2} rowSpacing={2} sx={{px:5, pt: 5, display: 'flex', justifyContent: 'center'}}>
          <div css={styles.btnArea}>
            <Button variant="contained" color="inherit" sx={{ mr: 5 }} onClick={handleClickBtn}>
            <Link to="/web_entry/nc_2" css={styles.link}>戻る</Link>
            </Button>
            <Button variant="contained" color="primary" sx={{ ml: 5 }} onClick={handleClickBtn}>
              <Link to="/web_entry/nc_2" css={styles.link}>登録する</Link>
            </Button>
          </div>
        </Grid>
      </StyledMuiPaper>
    </>
  )
}

const styles = {
  responsiveStyle:{
    width: '100%',
    padding: '1rem',
    "@media (min-width:700px)":{
      width: '60%',
      padding: '5rem',
    },
    overflow: 'hidden',
    textAlign: 'left',
    marginTop: '3rem',
  },
  inputItem:{
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    "@media (min-width:700px)":{
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
  },
  inputItemHeader:{
    fontWeight: 'bold',
    fontSize: '1rem',
    textAlign: 'left',
  },
  inputItemForm:{
    display:'flex',
    alignItems: 'center',
  },
  btnArea:{
    display: 'flex',
    justifyContent: 'center',
  },
  link:{
    color: '#FFFFFF'
  },
}
export default WebEntryConfirm;
