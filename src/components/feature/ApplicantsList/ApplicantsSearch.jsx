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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Paper from '@mui/material/Paper';


import StyledMuiTabs from '../../parts/tab/StyledMuiTabs';

const StyledMuiSearchTabs = styled(StyledMuiTabs)(({ theme }) => ({
  '& .MuiTabs-flexContainer': {
    flexWrap: 'wrap'
  },
  '& .MuiTab-root': {
    background: '#FFFFFF',
    borderRadius: '0.25rem',
    border: '1px solid #0047A4',
  },
  '& .Mui-selected': {
    background: '#0047A4',
    color: '#FFFFFF !important',
    borderRadius: '0.25rem',
    fontWeight: 'bold'
  },

}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pt: 3, pr: 3, pb: 3, pl: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const tabHeader = [ 'シンプル検索', '詳細検索' ];
const simpleSearchItems = [ '未対応', '呼び込み中', '登録完了', 'その他(対面など)', '登録辞退', '対象外' ];
const label = { inputProps: { 'aria-label': 'mitaiou' } };

const ApplicantsSearch = () =>{
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [department, setDepartment] = React.useState('');
  const handleChangeDepartment = (event) => {
    setDepartment(event.target.value);
  };
  const [branch1, setBranch1] = React.useState('');
  const handleChangeBranch1 = (event) => {
    setBranch1(event.target.value);
  };
  const [branch2, setBranch2] = React.useState('');
  const handleChangeBranch2 = (event) => {
    setBranch2(event.target.value);
  };
  return (
    <>
      <Box sx={{ width: '25%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <StyledMuiSearchTabs value={value} onChange={handleChange} aria-label="basic tabs example" TabIndicatorProps={{ style: { display: 'none' } }}>
            {tabHeader.map((head, i) => {
              return <Tab label={head} {...a11yProps({i})} sx={{ maxWidth: 'initial', minWidth: 'initial', width: '50%' }}/>
            })}
          </StyledMuiSearchTabs>
        </Box>
      </Box>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TabPanel value={value} index={0}>
          <div css={styles.searchItem}>
            <div css={styles.searchItemHeader}>進捗</div>
            <div>
              {simpleSearchItems.map((item) => {
                return <FormControlLabel control={<Checkbox />} label={item} sx={{ mr:4 }}/>
              })}
            </div>
          </div>
        </TabPanel>
        
        <TabPanel value={value} index={1}>
          <div css={styles.searchItem}>
            <div css={styles.searchItemHeader}>進捗</div>
            <div>
              {simpleSearchItems.map((item) => {
                return <FormControlLabel control={<Checkbox />} label={item} sx={{ mr:4 }}/>
              })}
            </div>
          </div>
          <div css={styles.searchItem}>
            <div css={styles.searchItemHeader}>担当支店</div>
            <div>
              <p>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="department">事業部</InputLabel>
                  <Select
                    labelId="department"
                    id="department"
                    value={department}
                    label="事業部"
                    onChange={handleChangeDepartment}
                  >
                    <MenuItem value={10}>OS</MenuItem>
                    <MenuItem value={20}>NC</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="branch1">支社</InputLabel>
                  <Select
                    labelId="branch1"
                    id="branch1"
                    value={branch1}
                    label="支社"
                    onChange={handleChangeBranch1}
                  >
                    <MenuItem value={10}>OS</MenuItem>
                    <MenuItem value={20}>NC</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="branch2">支店</InputLabel>
                  <Select
                    labelId="branch2"
                    id="branch2"
                    value={branch2}
                    label="支店"
                    onChange={handleChangeBranch2}
                  >
                    <MenuItem value={10}>新宿支店</MenuItem>
                    <MenuItem value={20}>池袋支店</MenuItem>
                  </Select>
                </FormControl>
              </p>
            </div>
          </div>
          <div css={styles.searchBoxFlex}>
            <div css={styles.searchItem}>
              <div css={styles.searchItemHeader}>名前</div>
              <TextField
                label="名前"
                id="name"
                size="small"
              />
            </div>
            <div css={styles.searchItem}>
              <div css={styles.searchItemHeader}>都道府県</div>
              <TextField
                label="名前"
                id="name"
                size="small"
              />
            </div>
          </div>

        </TabPanel>
      </Paper>
    </>
  )
}

const styles = {
  searchItem:{
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginBottom: '10px',
  },
  searchItemHeader:{
    width: '120px',
    marginRight: '30px'
  },
  searchBoxFlex:{
    display: 'flex',
    // justifyContent: 'flex-start'
  }
}

export default ApplicantsSearch;