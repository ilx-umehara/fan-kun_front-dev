/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';

function InputAddress() {
  return (
    <>
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
      <div css={styles.searchItem}>
        <div css={styles.searchItemHeader}>郵便番号</div>
        <TextField id="postcode" size="small" sx={{ width: '120px', mr: 1 }}/>
      </div>
    </Grid>
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
      <div css={styles.searchItem}>
        <div css={styles.searchItemHeader}>都道府県</div>
        <TextField id="age" size="small" sx={{ width: '120px', mr: 1 }}/>
      </div>
    </Grid>
  </>
  )
}
const styles = {
  searchItem:{
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '40px',
    marginBottom: '10px',
  },
  searchItemHeader:{
    width: '200px',
    marginRight: '30px',
    textAlign: 'left',
  },
}
export default InputAddress;