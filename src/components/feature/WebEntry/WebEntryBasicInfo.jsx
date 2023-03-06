/** @jsxImportSource @emotion/react */
import React from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import StyledMuiPaper from '../../parts/surface/StyledMuiPaper';
import RowRadioButtonsGroup from '../../parts/radio/RadioButtonsSelectGender';
import InputBirthdayAndAge from '../../parts/input/InputBirthdayAndAge';
import InputAddress from '../../parts/input/InputAddress';
import SelectedTransportation from "../../parts/select/SelectedTransportation";

function WebEntryBasicInfo(){
  return (
    <>
      <StyledMuiPaper css={styles.responsiveStyle}>
        <Grid container spacing={2} rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 2, xl: 2 }} sx={{px:5}}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{mb:3}}>
          <h2 className="contentBlockTitle">基本情報</h2>
        </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div css={styles.inputItem}>
              <div css={styles.inputItemHeader}>名前（漢字）</div>
              <div css={styles.inputItemForm}>
                <TextField label="姓" id="sei_kanji" size="small" sx={{ width: '240px', mr: 5 }} />
                <TextField label="名" id="mei_kanji" size="small" sx={{ width: '240px', mr: 5 }} />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div css={styles.inputItem}>
              <div css={styles.inputItemHeader}>名前（カタカナ）</div>
              <div css={styles.inputItemForm}>
                <TextField label="セイ" id="sei_kana" size="small" sx={{ width: '240px', mr: 5 }} />
                <TextField label="メイ" id="mei_kana" size="small" sx={{ width: '240px', mr: 5 }} />
              </div>
            </div>
          </Grid>
          <RowRadioButtonsGroup/>
          <InputBirthdayAndAge />
          <InputAddress/>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div css={styles.inputItem}>
              <div css={styles.inputItemHeader}>最寄り駅①</div>
              <div css={styles.inputItemForm}>
                <span>沿線&emsp;</span>
                <TextField label="沿線" id="railway1" size="small" sx={{ width: '300px', mr: 5 }} placeholder="JR山手線" />
                <span>駅名&emsp;</span>
                <TextField label="駅名" id="station1" size="small" sx={{ width: '200px', mr: 1 }} placeholder="新宿" />
                <span>駅&emsp;</span>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div css={styles.inputItem}>
              <div css={styles.inputItemHeader}>最寄り駅①からの交通手段</div>
              <div css={styles.inputItemForm}>
                <SelectedTransportation/>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div css={styles.inputItem}>
              <div css={styles.inputItemHeader}>最寄り駅①からの所要時間</div>
              <div css={styles.inputItemForm}>
                <TextField id="howlongtime1" size="small" sx={{ width: '80px', mr: 1 }} />
                <span>分&emsp;</span>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div css={styles.inputItem}>
              <div css={styles.inputItemHeader}>最寄り駅②<span className="optionalTag">任意</span></div>
              <div css={styles.inputItemForm}>
                <span>沿線&emsp;</span>
                <TextField label="沿線" id="railway2" size="small" sx={{ width: '300px', mr: 5 }} placeholder="JR山手線" />
                <span>駅名&emsp;</span>
                <TextField label="駅名" id="station2" size="small" sx={{ width: '200px', mr: 1 }} placeholder="新宿" />
                <span>駅&emsp;</span>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div css={styles.inputItem}>
              <div css={styles.inputItemHeader}>最寄り駅②からの交通手段<span className="optionalTag">任意</span></div>
              <div css={styles.inputItemForm}>
                <SelectedTransportation/>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div css={styles.inputItem}>
              <div css={styles.inputItemHeader}>最寄り駅②からの所要時間<span className="optionalTag">任意</span></div>
              <div css={styles.inputItemForm}>
                <TextField id="howlongtime2" size="small" sx={{ width: '80px', mr: 1 }} />
                <span>分&emsp;</span>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div css={styles.inputItem}>
              <div css={styles.inputItemHeader}>電話番号(携帯)</div>
              <div css={styles.inputItemForm}>
                <TextField label="携帯" id="tel1" size="small" sx={{ width: '300px', mr: 5 }} />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div css={styles.inputItem}>
              <div css={styles.inputItemHeader}>電話番号(その他)<span className="optionalTag">任意</span></div>
              <div css={styles.inputItemForm}>
                <TextField label="その他" id="tel2" size="small" sx={{ width: '300px', mr: 5 }} />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div css={styles.inputItem}>
              <div css={styles.inputItemHeader}>メールアドレス①</div>
              <div css={styles.inputItemForm}>
                <TextField label="" id="mail_address1" size="small" sx={{ width: '500px', mr: 5 }} />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div css={styles.inputItem}>
              <div css={styles.inputItemHeader}>メールアドレス② <span className="optionalTag">任意</span></div>
              <div css={styles.inputItemForm}>
                <TextField label="" id="mail_address2" size="small" sx={{ width: '500px', mr: 5 }} />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div css={styles.inputItem}>
              <div css={styles.inputItemHeader}>在留カード情報</div>
              <div css={styles.inputItemForm}>
                <TextField label="" id="resident_info" size="small" sx={{ width: '200px', mr: 5 }} />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ display: 'flex', justifyContent: 'center', mt:5 }}>
            <div css={styles.btnArea}>
              <Button variant="contained" color="inherit" sx={{ mr: 10 }}>戻る</Button>
              <Button variant="contained" color="primary" sx={{ ml: 10 }}>次へ</Button>
            </div>
          </Grid>
        </Grid>

      </StyledMuiPaper>
    </>
  )
}

const styles = {
  responsiveStyle:{
    width: '60%',
    "@media (max-width:700px)":{
      width: '80%',
    },
    overflow: 'hidden',
    py: 5,
    textAlign: 'left',
    mt: 10,
  },
  inputItem:{
    width: '100%',
    marginBottom: '20px',
  },
  inputItemHeader:{
    fontWeight: 'bold',
    fontSize: '1.1rem',
    marginRight: '30px',
    marginBottom: '10px',
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
export default WebEntryBasicInfo;
