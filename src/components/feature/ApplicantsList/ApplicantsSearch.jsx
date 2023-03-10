/** @jsxImportSource @emotion/react */
import React from "react";
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


import StyledMuiPaper from '../../parts/surface/StyledMuiPaper';
import StyledMuiTabs from '../../parts/tab/StyledMuiTabs';
import CheckedProgressStatus from '../../parts/checkbox/CheckedProgressStatus';
import SelectedDepartment from '../../parts/select/SelectedDepartment';
import SelectedBranch from '../../parts/select/SelectedBranch';
import SelectedPrefectureAndCity from '../../parts/select/SelectedPrefectureAndCity';
import SelectedAppliMedia from '../../parts/select/SelectedAppliMedia';
import CheckidIdentificatioDoc from '../../parts/checkbox/CheckidIdentificatioDoc';
import CustomDatePicker from '../../parts/date/CustomDatePicker';
import CheckidInterviewMethod from '../../parts/checkbox/CheckidInterviewMethod';
import CheckedInputWebEntry from '../../parts/checkbox/CheckedInputWebEntry';

const label = { inputProps: { 'aria-label': 'mitaiou' } };

const ApplicantsSearch = () =>{

  const [branch1, setBranch1] = React.useState('');
  const handleChangeBranch1 = (event) => {
    setBranch1(event.target.value);
  };
  return (
    <>

      <StyledMuiPaper sx={{ width: '100%', overflow: 'hidden', py: 5, textAlign: 'left' }}>
        

          <Grid container spacing={2} rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 2, xl: 2 }} sx={{px:5}}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <div css={styles.searchItem}>
                <div css={styles.searchItemHeader}>??????</div>
                <CheckedProgressStatus />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={5} xl={5}>
              <div css={styles.searchItem}>
                <div css={styles.searchItemHeader}>????????????</div>
                  <SelectedDepartment />
                  <FormControl sx={{ mr: 2, minWidth: 120 }} size="small">
                    <InputLabel id="branch1">??????</InputLabel>
                    <Select
                      labelId="branch1"
                      id="branch1"
                      value={branch1}
                      label="??????"
                      onChange={handleChangeBranch1}
                    >
                      <MenuItem value={10}>OS</MenuItem>
                      <MenuItem value={20}>NC</MenuItem>
                    </Select>
                  </FormControl>
                  <SelectedBranch />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={7} xl={7}>
              <div css={styles.searchItem}>
                <div css={styles.searchItemHeader}>????????????</div>
                  <SelectedDepartment />
                  <FormControl sx={{ mr: 2, minWidth: 120 }} size="small">
                    <InputLabel id="branch1">??????</InputLabel>
                    <Select
                      labelId="branch1"
                      id="branch1"
                      value={branch1}
                      label="??????"
                      onChange={handleChangeBranch1}
                    >
                      <MenuItem value={10}>OS</MenuItem>
                      <MenuItem value={20}>NC</MenuItem>
                    </Select>
                  </FormControl>
                  <SelectedBranch />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={5} xl={5}>
              <div css={styles.searchItem}>
                <div css={styles.searchItemHeader}>??????</div>
                <TextField label="??????" id="name" size="small" sx={{ width: '240px' }} />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={7} xl={7}>
              <div css={styles.searchItem}>
                <div css={styles.searchItemHeader}>????????????</div>
                <SelectedPrefectureAndCity />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <div css={styles.searchItem}>
                <div css={styles.searchItemHeader}>?????????ID</div>
                <TextField label="?????????ID" id="appli_id" size="small" sx={{ width: '240px' }} />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
              <div css={styles.searchItem}>
                <div css={styles.searchItemHeader}>??????</div>
                <TextField label="From" id="age_from" size="small" sx={{ width: '15%' }}/>
                <span>&emsp;???&emsp;</span>
                <TextField label="To" id="age_to" size="small" sx={{ width: '15%' }}/>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
              <div css={styles.searchItem}>
                <div css={styles.searchItemHeader}>????????????</div>
                <TextField label="????????????" id="tel" size="small" sx={{ width: '240px' }}/>
              </div>
            </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
              <div css={styles.searchItem}>
                <div css={styles.searchItemHeader}>?????????????????????</div>
                <TextField label="?????????????????????" id="mail_address" size="small" sx={{ width: '240px' }}/>
              </div>
            </Grid>


            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
              <div css={styles.searchItem}>
                <div css={styles.searchItemHeader}>????????????</div>
                <SelectedAppliMedia />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
              <div css={styles.searchItem}>
                <div css={styles.searchItemHeader}>?????????(Alive)</div>
                <CustomDatePicker />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
              <div css={styles.searchItem}>
                <div css={styles.searchItemHeader}>??????????????????</div>
                <TextField label="??????????????????" id="job_title" size="small" sx={{ width: '240px' }} />
              </div>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <div css={styles.searchItem}>
                <div css={styles.searchItemHeader}>??????????????????</div>
                <CheckidIdentificatioDoc />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={5} xl={5}>
              <div css={styles.searchItem}>
                <div css={styles.searchItemHeader}>???????????????</div>
                <CustomDatePicker />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={7} xl={7}>
              <div css={styles.searchItem}>
                <CheckidInterviewMethod />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={9} xl={9}>
              <div css={styles.searchItem}>
              <div css={styles.searchItemHeader}>Web???????????????</div>
                <CheckedInputWebEntry />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Grid container spacing={2} rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 2, xl: 2 }} sx={{px:5}}>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                  <div css={styles.downloadBtn}>
                    
                  </div>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                  <div css={styles.searchBtn}>
                    <Button variant="contained" color="success" size="large" sx={{ width: '30%', height: '60px' }}>??????</Button>
                  </div>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                  <div css={styles.clearBtn}>
                    <Button variant="contained" color="primary" sx={{ ml: 7 }}>CSV??????????????????</Button>
                    <Button variant="contained" color="error" sx={{ ml: 7 }}>????????????????????????</Button>
                  </div>
                </Grid>
              </Grid>
            </Grid>
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
    width: '120px',
    marginRight: '30px',
    textAlign: 'left',
  },
  searchBoxFlex:{
    display: 'flex',
    // justifyContent: 'flex-start'
  }
}

export default ApplicantsSearch;