/** @jsxImportSource @emotion/react */
import React from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';
import StyledMuiPaper from '../../parts/surface/StyledMuiPaper';

import RowRadioButtonsGroup from '../../parts/radio/RadioButtonsSelectGender';
import InputBirthdayAndAge from '../../parts/input/InputBirthdayAndAge';
import InputAddress from '../../parts/input/InputAddress';

function WebEntryBasicInfo(){
  return (
    <>
      <StyledMuiPaper sx={{ width: '70%', overflow: 'hidden', py: 5, textAlign: 'left', mt: 10 }}>
        <Grid container spacing={2} rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 2, xl: 2 }} sx={{px:5}}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div css={styles.searchItem}>
              <div css={styles.searchItemHeader}>名前（漢字）</div>
              <TextField label="姓" id="sei_kanji" size="small" sx={{ width: '240px', mr: 5 }} />
              <TextField label="名" id="mei_kanji" size="small" sx={{ width: '240px', mr: 5 }} />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div css={styles.searchItem}>
              <div css={styles.searchItemHeader}>名前（カタカナ）</div>
              <TextField label="セイ" id="sei_kana" size="small" sx={{ width: '240px', mr: 5 }} />
              <TextField label="メイ" id="mei_kana" size="small" sx={{ width: '240px', mr: 5 }} />
            </div>
          </Grid>
          <RowRadioButtonsGroup/>
          <InputBirthdayAndAge />
          <InputAddress/>
        </Grid>
      </StyledMuiPaper>
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
  downloadBtn:{
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: '40px',
    marginBottom: '10px',
  },
  searchBtn:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '40px',
    marginBottom: '10px',
  },
  clearBtn:{
    display: 'flex',
    justifyContent: 'flex-end',
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
  searchBoxFlex:{
    display: 'flex',
    // justifyContent: 'flex-start'
  }
}
export default WebEntryBasicInfo;
