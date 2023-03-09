/** @jsxImportSource @emotion/react */
import React from "react";
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import StyledMuiPaper from '../../parts/surface/StyledMuiPaper';
import SelectedTransportation from "../../parts/select/SelectedTransportation";
import SelectedAssistanceToResistance from "../../parts/select/SelectedYesOrNo";
import SelectPreferredPriority from "./forms/SelectPreferredPriority";
import SelectedPreferredWorkingDays from "../../parts/select/SelectedPreferredWorkingDays";

import CheckedPreferredEmpType from "../../parts/checkbox/CheckedPreferredEmpType";
import CheckedWeekday from "../../parts/checkbox/CheckedWeekday";
import CheckedPreferredWorkingHours from "../../parts/checkbox/CheckedPreferredWorkingHours";
import CheckedPreferredFacilityType from "../../parts/checkbox/CheckedPreferredFacilityType";

function WebEntryNc2(){
  const handleClickBtn = () => {
    window.scroll({top: 0});
  }
  
  return (
    <>
      <StyledMuiPaper css={styles.responsiveStyle}>
        <Grid container spacing={2} rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 2, xl: 2 }}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{mb:3}}>
            <h2 className="contentBlockTitle">希望条件</h2>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div css={styles.inputItem}>
              <div css={styles.inputItemHeader}>希望の雇用形態</div>
              <div className="requiredTag">必須</div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ mb: 2 }}>
            <CheckedPreferredEmpType/>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div css={styles.inputItem}>
              <div css={styles.inputItemHeader}>案内を控えてほしい施設・病院</div>
              <div className="requiredTag">必須</div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ mb: 2 }}>
            <TextField label="施設・病院名" id="refusal_facility" size="small" sx={{ width: '300px', mr: 5 }} />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div css={styles.inputItem}>
              <div css={styles.inputItemHeader}>就業開始可能日</div>
              <div className="requiredTag">必須</div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ mb: 2 }}>
            <TextField id="date_startable_working" size="small" sx={{ width: '240px', mr: 5 }} />  
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div css={styles.inputItem}>
              <div css={styles.inputItemHeader}>勤務可能曜日</div>
              <div className="requiredTag">必須</div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ mb: 2 }}>
            <CheckedWeekday/>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div css={styles.inputItem}>
              <div css={styles.inputItemHeader}>希望勤務日数</div>
              <div className="requiredTag">必須</div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ mb: 2 }}>
            <SelectedPreferredWorkingDays/>{/* !memo!セレクトボックスに要変更 */}
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div css={styles.inputItem}>
              <div css={styles.inputItemHeader}>希望勤務時間</div>
              <div className="requiredTag">必須</div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ mb: 2 }}>
            <CheckedPreferredWorkingHours/>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div css={styles.inputItem}>
              <div css={styles.inputItemHeader}>具体的希望時間</div>
              <div className="requiredTag">必須</div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ mb: 2 }}>
            <TextField id="concrete_preferred_hours" size="small" sx={{ width: '240px', mr: 5 }} />  
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div css={styles.inputItem}>
              <div css={styles.inputItemHeader}>残業可否</div>
              <div className="requiredTag">必須</div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ mb: 2 }}>
            <FormControl sx={{ mr: 2, minWidth: 120 }} size="small">
              <Select
                defaultValue={10}>
                <MenuItem value={10}>可</MenuItem>
                <MenuItem value={20}>不可</MenuItem>
                <MenuItem value={30}>場合により可</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div css={styles.inputItem}>
              <div css={styles.inputItemHeader}>希望条件</div>
              <div className="requiredTag">必須</div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} css={styles.inputItemForm}>
            <span>時給：</span><TextField id="concrete_preferred_hours" size="small" sx={{ width: '130px', mr: 1 }} /><span>円以上</span>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} css={styles.inputItemForm} sx={{ mb: 2 }}>
            <span>通勤時間：</span><TextField id="concrete_preferred_hours" size="small" sx={{ width: '100px', mr: 1 }} /><span>分以内</span>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div css={styles.inputItem}>
              <div css={styles.inputItemHeader}>介護職・看護助手の経験年数</div>
              <div className="requiredTag">必須</div>
            </div>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6} xl={6} css={styles.inputItemForm}>
            <TextField id="concrete_preferred_hours" size="small" sx={{ width: '130px', mr: 1 }} /><span>年</span>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6} xl={6} css={styles.inputItemForm} sx={{ mb: 2 }}>
            <TextField id="concrete_preferred_hours" size="small" sx={{ width: '40%', mr: 1 }} /><span>ヵ月</span>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div css={styles.inputItem}>
              <div css={styles.inputItemHeader}>希望施設形態</div>
              <div className="requiredTag">必須</div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ mb: 2 }}>
            <CheckedPreferredFacilityType/>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div css={styles.inputItem}>
              <div css={styles.inputItemHeader}>介護職を選ばれた理由</div>
              <div className="requiredTag">必須</div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ mb: 2 }}>
            <TextField id="cause_selected_care_job" size="small" sx={{ width: '80%', mr: 5 }} />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div css={styles.inputItem}>
              <div css={styles.inputItemHeader}>仕事探しをしている理由</div>
              <div className="requiredTag">必須</div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ mb: 2 }}>
            <TextField id="job_seeking_reason" size="small" sx={{ width: '80%', mr: 5 }} />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div css={styles.inputItem}>
              <div css={styles.inputItemHeader}>希望交通手段</div>
              <div className="requiredTag">必須</div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ mb: 2 }}>
            <SelectedTransportation/>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div css={styles.inputItem}>
              <div css={styles.inputItemHeader}>その他希望事項</div>
              <div className="requiredTag">必須</div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ mb: 2 }}>
            <TextField id="other_preferred_matter" size="small" sx={{ width: '80%', mr: 5 }} />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div css={styles.inputItem}>
              <div css={styles.inputItemHeader}>三大介助の抵抗有無</div>
              <div className="requiredTag">必須</div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ mb: 2 }}>
            <SelectedAssistanceToResistance/>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div css={styles.inputItem}>
              <div css={styles.inputItemHeader}>レクリエーションの対応可否</div>
              <div className="requiredTag">必須</div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ mb: 2 }}>
            <FormControl sx={{ mr: 2, minWidth: 120 }} size="small">
              <Select>
                <MenuItem value="1">可</MenuItem>
                <MenuItem value="2">不可</MenuItem>
                <MenuItem value="3">わからない</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div css={styles.inputItem}>
              <div css={styles.inputItemHeader}>調理補助の対応可否</div>
              <div className="requiredTag">必須</div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ mb: 2 }}>
            <FormControl sx={{ mr: 2, minWidth: 120 }} size="small">
              <Select>
                <MenuItem value="hidden" selected>選択してください</MenuItem>
                <MenuItem value="1">不可</MenuItem>
                <MenuItem value="2">湯銭レベルであれば可能</MenuItem>
                <MenuItem value="3">メニューが決まっており、材料もそろっている状態での調理であれば対応可能</MenuItem>
                <MenuItem value="4">献立作りから対応可能</MenuItem>
                <MenuItem value="5">わからない</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div css={styles.inputItem}>
              <div css={styles.inputItemHeader}>送迎業務の可否</div>
              <div className="requiredTag">必須</div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ mb: 2 }}>
            <FormControl sx={{ mr: 2, minWidth: 120 }} size="small">
              <Select>
                <MenuItem value="hidden" selected>選択してください</MenuItem>
                <MenuItem value="1">不可</MenuItem>
                <MenuItem value="2">軽自動車であれば対応可能</MenuItem>
                <MenuItem value="3">普通車であれば対応可能（②も対応可能）</MenuItem>
                <MenuItem value="4">送迎で使用することが多いバンタイプのお車も対応可能(②～③も対応可能)</MenuItem>
                <MenuItem value="5">わからない</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div css={styles.inputItem}>
              <div css={styles.inputItemHeader}>希望条件の優先順位(1位)</div>
              <div className="requiredTag">必須</div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ mb: 2 }}>
            <SelectPreferredPriority />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div css={styles.inputItem}>
              <div css={styles.inputItemHeader}>希望条件の優先順位(2位)</div>
              <div className="requiredTag">必須</div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ mb: 2 }}>
            <SelectPreferredPriority />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div css={styles.inputItem}>
              <div css={styles.inputItemHeader}>希望条件の優先順位(3位)</div>
              <div className="requiredTag">必須</div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ mb: 5 }}>
            <SelectPreferredPriority />
          </Grid>
        </Grid>
        <Grid container spacing={2} rowSpacing={2} sx={{px:5, pt: 5, display: 'flex', justifyContent: 'center'}}>
          <div css={styles.btnArea}>
            <Button variant="contained" color="inherit" sx={{ mr: 5 }} onClick={handleClickBtn}>
              <Link to="/web_entry/basic_info" css={styles.link}>戻る</Link>
            </Button>
            <Button variant="contained" color="primary" sx={{ ml: 5 }} onClick={handleClickBtn}>
              <Link to="/web_entry/confirm" css={styles.link}>確認する</Link>
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
export default WebEntryNc2;
