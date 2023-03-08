/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { styled } from '@mui/material/styles';

import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';

import formatTelNumber from "../../../../libs/formatTelNumber";


function InputPhoneNumber () {
  const [ phoneNum1, setPhoneNum1 ] = useState('');
  const handlePhoneNum1 = (event) => {

    setPhoneNum1(event.target.value);
  }
  const [ phoneNum2, setPhoneNum2 ] = useState('');
  const handlePhoneNum2 = (event) => {
    // const inputNumber = formatTelNumber(event.target.value);
    // console.log(inputNumber);
    
    // setPhoneNum2(inputNumber);
    setPhoneNum2(event.target.value);
  }


  return (
    <>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <div css={styles.inputItem}>
          <div css={styles.inputItemHeader}>電話番号(携帯)</div>
          <div className="requiredTag">必須</div>
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ mb: 2 }}>
        <TextField 
          label="携帯"
          id="tel1"
          value={phoneNum1}
          onChange={handlePhoneNum1}
          size="small"
          sx={{ width: '90%', mr: 5 }}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <div css={styles.inputItem}>
          <div css={styles.inputItemHeader}>電話番号(その他)</div>
          <div className="optionalTag">任意</div>
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ mb: 2 }}>
        <TextField 
          label="その他"
          id="tel2"
          value={phoneNum2}
          onChange={handlePhoneNum2}
          size="small"
          sx={{ width: '90%', mr: 5 }}
        />
      </Grid>
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
  }
}

export default InputPhoneNumber;