/** @jsxImportSource @emotion/react */
import React from "react";
import { styled } from '@mui/material/styles';
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
import RowRadioButtonsGroup from '../../parts/radio/RadioButtonsSelectGender';
import InputBirthdayAndAge from '../../parts/input/InputBirthdayAndAge';
import InputAddress from '../../parts/input/InputAddress';
import SelectedTransportation from "../../parts/select/SelectedTransportation";
import SelectedAssistanceToResistance from "../../parts/select/SelectedYesOrNo";

import CheckedPreferredEmpType from "../../parts/checkbox/CheckedPreferredEmpType";
import CheckedWeekday from "../../parts/checkbox/CheckedWeekday";
import CheckedPreferredWorkingDays from "../../parts/checkbox/CheckedPreferredWorkingDays";
import CheckedPreferredWorkingHours from "../../parts/checkbox/CheckedPreferredWorkingHours";
import CheckedPreferredFacilityType from "../../parts/checkbox/CheckedPreferredFacilityType";

function WebEntryNc2(){
  return (
    <>
      <StyledMuiPaper css={styles.responsiveStyle}>
        <Grid container spacing={2} rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 2, xl: 2 }} sx={{px:5}}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{mb:3}}>
          <h2 className="contentBlockTitle">希望条件</h2>
        </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div css={styles.inputItem}>
              <div css={styles.inputItemHeader}>希望の雇用形態</div>
              <div css={styles.inputItemForm}>
                <CheckedPreferredEmpType/>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div css={styles.inputItem}>
              <div css={styles.inputItemHeader}>案内を控えてほしい施設・病院</div>
              <div css={styles.inputItemForm}>
                <TextField label="施設・病院名" id="refusal_facility" size="small" sx={{ width: '300px', mr: 5 }} />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div css={styles.inputItem}>
              <div css={styles.inputItemHeader}>就業開始可能日</div>
              <div css={styles.inputItemForm}>
                <TextField id="date_startable_working" size="small" sx={{ width: '240px', mr: 5 }} />  
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div css={styles.inputItem}>
              <div css={styles.inputItemHeader}>勤務可能曜日</div>
              <div css={styles.inputItemForm}>
                <CheckedWeekday/>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div css={styles.inputItem}>
              <div css={styles.inputItemHeader}>希望勤務日数</div>
              <div css={styles.inputItemForm}>
                <CheckedPreferredWorkingDays/>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div css={styles.inputItem}>
              <div css={styles.inputItemHeader}>希望勤務時間</div>
              <div css={styles.inputItemForm}>
                <CheckedPreferredWorkingHours/>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div css={styles.inputItem}>
              <div css={styles.inputItemHeader}>具体的希望時間</div>
              <div css={styles.inputItemForm}>
                <TextField id="concrete_preferred_hours" size="small" sx={{ width: '300px', mr: 5 }} />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div css={styles.inputItem}>
              <div css={styles.inputItemHeader}>残業可否</div>
              <div css={styles.inputItemForm}>
                <TextField id="concrete_preferred_hours" size="small" sx={{ width: '80px', mr: 1 }} /><span>時まで可能</span>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div css={styles.inputItem}>
              <div css={styles.inputItemHeader}>希望条件</div>
              <div css={styles.inputItemForm}>
                <span>時給：</span><TextField id="concrete_preferred_hours" size="small" sx={{ width: '100px', mr: 1 }} /><span>円以上</span>
                
                <span css={styles.marginLeft50}>通勤時間：</span><TextField id="concrete_preferred_hours" size="small" sx={{ width: '50px', mr: 1 }} /><span>分以内</span>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div css={styles.inputItem}>
              <div css={styles.inputItemHeader}>介護職・看護助手の経験年数</div>
              <div css={styles.inputItemForm}>
                <TextField id="concrete_preferred_hours" size="small" sx={{ width: '60px', mr: 1 }} /><span>年</span>
                
                <TextField id="concrete_preferred_hours" size="small" sx={{ width: '60px', mx: 1 }} /><span>ヵ月</span>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div css={styles.inputItem}>
              <div css={styles.inputItemHeader}>希望施設形態</div>
              <div css={styles.inputItemForm}>
                <CheckedPreferredFacilityType/>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div css={styles.inputItem}>
              <div css={styles.inputItemHeader}>介護職を選ばれた理由</div>
              <div css={styles.inputItemForm}>
                <TextField id="cause_selected_care_job" size="small" sx={{ width: '80%', mr: 5 }} />  
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div css={styles.inputItem}>
              <div css={styles.inputItemHeader}>仕事探しをしている理由</div>
              <div css={styles.inputItemForm}>
                <TextField id="job_seeking_reason" size="small" sx={{ width: '80%', mr: 5 }} />  
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div css={styles.inputItem}>
              <div css={styles.inputItemHeader}>希望交通手段</div>
              <div css={styles.inputItemForm}>
                <SelectedTransportation/>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div css={styles.inputItem}>
              <div css={styles.inputItemHeader}>その他希望事項</div>
              <div css={styles.inputItemForm}>
                <TextField id="other_preferred_matter" size="small" sx={{ width: '80%', mr: 5 }} />  
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div css={styles.inputItem}>
              <div css={styles.inputItemHeader}>三大介助の抵抗有無</div>
              <div css={styles.inputItemForm}>
                <SelectedAssistanceToResistance/>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div css={styles.inputItem}>
              <div css={styles.inputItemHeader}>レクリエーションの対応可否</div>
              <div css={styles.inputItemForm}>
              <FormControl sx={{ mr: 2, minWidth: 120 }} size="small">
                <Select>
                  <MenuItem value="1">可</MenuItem>
                  <MenuItem value="2">不可</MenuItem>
                  <MenuItem value="3">わからない</MenuItem>
                </Select>
              </FormControl>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div css={styles.inputItem}>
              <div css={styles.inputItemHeader}>調理補助の対応可否</div>
              <div css={styles.inputItemForm}>
              <FormControl sx={{ mr: 2, minWidth: 300 }} size="small">
                <Select>
                  <MenuItem value="hidden" selected>選択してください</MenuItem>
                  <MenuItem value="1">不可</MenuItem>
                  <MenuItem value="2">湯銭レベルであれば可能</MenuItem>
                  <MenuItem value="3">メニューが決まっており、材料もそろっている状態での調理であれば対応可能</MenuItem>
                  <MenuItem value="4">献立作りから対応可能</MenuItem>
                  <MenuItem value="5">わからない</MenuItem>
                </Select>
              </FormControl>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div css={styles.inputItem}>
              <div css={styles.inputItemHeader}>送迎業務の可否</div>
              <div css={styles.inputItemForm}>
              <FormControl sx={{ mr: 2, minWidth: 300 }} size="small">
                <Select>
                  <MenuItem value="hidden" selected>選択してください</MenuItem>
                  <MenuItem value="1">不可</MenuItem>
                  <MenuItem value="2">軽自動車であれば対応可能</MenuItem>
                  <MenuItem value="3">普通車であれば対応可能（②も対応可能）</MenuItem>
                  <MenuItem value="4">送迎で使用することが多いバンタイプのお車も対応可能(②～③も対応可能)</MenuItem>
                  <MenuItem value="5">わからない</MenuItem>
                </Select>
              </FormControl>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div css={styles.inputItem}>
              <div css={styles.inputItemHeader}>希望条件の優先順位(1位)</div>
              <div css={styles.inputItemForm}>
                <TextField id="suggested_treatment_priority_1" size="small" sx={{ width: '80%', mr: 5 }} />  
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div css={styles.inputItem}>
              <div css={styles.inputItemHeader}>希望条件の優先順位(2位)</div>
              <div css={styles.inputItemForm}>
                <TextField id="suggested_treatment_priority_2" size="small" sx={{ width: '80%', mr: 5 }} />  
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div css={styles.inputItem}>
              <div css={styles.inputItemHeader}>希望条件の優先順位(3位)</div>
              <div css={styles.inputItemForm}>
                <TextField id="suggested_treatment_priority_3" size="small" sx={{ width: '80%', mr: 5 }} />  
              </div>
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
    textAlign: 'left',
    mt: 5,
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
  },
  marginLeft50:{
    marginLeft: '50px',
  }
}
export default WebEntryNc2;
