/** @jsxImportSource @emotion/react */
import React, {useState} from 'react'
import { createContext } from 'react';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { useForm, Controller } from "react-hook-form";


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

export const UserCount = createContext()


function WebEntryBasicInfo(props){

  const { control, handleSubmit } = useForm({
    defaultValues: {
      checkBox: false,
      textBox: "",
      pullDown: "",
    },
  });
  const onSubmit = () => {
    props.handleNext();
  };











  const handleClickBtn = () => {
    window.scroll({top: 0});
  }
  return (
    <>
      <StyledMuiPaper css={styles.responsiveStyle}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2} rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 2, xl: 2 }}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{mb:3}}>
              <h2 className="contentBlockTitle">基本情報</h2>
            </Grid>
            
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <div css={styles.inputItem}>
                <div css={styles.inputItemHeader}>名前（漢字）</div>
                <div className="requiredTag">必須</div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={5} xl={5}>
              <Controller
                control={control}
                name="sei_kanji"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="姓"
                    id="sei_kanji"
                    size="small"
                    sx={{ width: '90%', mr: 5 }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={5} xl={5} sx={{ mb: 2 }}>
              <Controller
                control={control}
                name="mei_kanji"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="名"
                    id="mei_kanji"
                    size="small"
                    sx={{ width: '90%', mr: 5 }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <div css={styles.inputItem}>
                <div css={styles.inputItemHeader}>名前（カタカナ）</div>
                <div className="requiredTag">必須</div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={5} xl={5}>
              <TextField label="セイ" id="sei_kana" size="small" sx={{ width: '90%', mr: 5 }} />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={5} xl={5} sx={{ mb: 2 }}>
              <TextField label="メイ" id="mei_kana" size="small" sx={{ width: '90%', mr: 5 }} />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <div css={styles.inputItem}>
                <div css={styles.inputItemHeader}>性別</div>
                <div className="requiredTag">必須</div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ mb: 2 }}>
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel value="male" control={<Radio />} label="男性" />
                  <FormControlLabel value="female" control={<Radio />} label="女性" />
                </RadioGroup>
              </FormControl>
            </Grid>

            <InputBirthdayAndAge />
            <InputAddress/>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <div css={styles.inputItem}>
                <div css={styles.inputItemHeader}>最寄り駅①</div>
                <div className="optionalTag">任意</div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} css={styles.inputItemForm}>
              <span>沿線&emsp;</span><TextField label="沿線" id="railway1" size="small" sx={{ width: '70%', mr: 5 }} placeholder="JR山手線" />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ mb: 2 }} css={styles.inputItemForm}>
              <span>駅名&emsp;</span><TextField label="駅名" id="station1" size="small" sx={{ width: '60%', mr: 1 }} placeholder="新宿" /><span>駅&emsp;</span>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <div css={styles.inputItem}>
                <div css={styles.inputItemHeader}>最寄り駅①からの交通手段</div>
                <div className="optionalTag">任意</div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ mb: 2 }}>
              <SelectedTransportation/>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <div css={styles.inputItem}>
                <div css={styles.inputItemHeader}>最寄り駅①からの所要時間</div>
                <div className="optionalTag">任意</div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} css={styles.inputItemForm} sx={{ mb: 2 }}>
              <TextField id="howlongtime1" size="small" sx={{ width: '30%', mr: 1 }} /><span>分&emsp;</span>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <div css={styles.inputItem}>
                <div css={styles.inputItemHeader}>最寄り駅②</div>
                <div className="optionalTag">任意</div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} css={styles.inputItemForm}>
              <span>沿線&emsp;</span><TextField label="沿線" id="railway2" size="small" sx={{ width: '70%', mr: 5 }} placeholder="JR山手線" />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ mb: 2 }} css={styles.inputItemForm}>
              <span>駅名&emsp;</span><TextField label="駅名" id="station2" size="small" sx={{ width: '60%', mr: 1 }} placeholder="新宿" /><span>駅&emsp;</span>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <div css={styles.inputItem}>
                <div css={styles.inputItemHeader}>最寄り駅②からの交通手段</div>
                <div className="optionalTag">任意</div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ mb: 2 }}>
              <SelectedTransportation/>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <div css={styles.inputItem}>
                <div css={styles.inputItemHeader}>最寄り駅②からの所要時間</div>
                <div className="optionalTag">任意</div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} css={styles.inputItemForm} sx={{ mb: 2 }}>
              <TextField id="howlongtime1" size="small" sx={{ width: '30%', mr: 1 }} /><span>分&emsp;</span>
            </Grid>
            
            <InputPhoneNumber/>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <div css={styles.inputItem}>
                <div css={styles.inputItemHeader}>メールアドレス①</div>
                <div className="requiredTag">必須</div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ mb: 2 }}>
              <TextField label="" id="mail_address1" size="small" sx={{ width: '90%', mr: 5 }} />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <div css={styles.inputItem}>
                <div css={styles.inputItemHeader}>メールアドレス②</div>
                <div className="optionalTag">任意</div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ mb: 2 }}>
              <TextField label="" id="mail_address1" size="small" sx={{ width: '90%', mr: 5 }} />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <div css={styles.inputItem}>
                <div css={styles.inputItemHeader}>在留カード情報</div>
                <div className="requiredTag">必須</div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ mb: 5 }}>
              <TextField label="" id="resident_info" size="small" sx={{ width: '50%', mr: 5 }} />
            </Grid>
            
          </Grid>
          <Grid container spacing={2} rowSpacing={2} sx={{px:5, pt: 5, display: 'flex', justifyContent: 'center'}}>
            <div css={styles.btnArea}>
              <Button variant="contained" color="inherit" sx={{ mr: 5 }} onClick={handleClickBtn}>戻る</Button>
              <Button type="submit" variant="contained" color="primary" sx={{ ml: 5 }} onClick={handleClickBtn}>
                <Link to="/web_entry/nc_2" css={styles.link}>次へ</Link>
              </Button>
            </div>
          </Grid>
        </form>
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
export default WebEntryBasicInfo;
