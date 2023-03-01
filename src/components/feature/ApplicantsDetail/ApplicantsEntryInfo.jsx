/** @jsxImportSource @emotion/react */
import React from "react";
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Modal from '@mui/material/Modal';
import ModalEditEntryInfo from "../modals/ModalEditEntryInfo";

import StyledMuiTabs from '../../parts/tab/StyledMuiTabs';
import StyledMuiTableCell from '../../parts/table/StyledMuiTable/StyledMuiTableCell';
import StyledMuiTableHead from '../../parts/table/StyledMuiTable/StyledMuiTableHead';
import StyledMuiTableRow from '../../parts/table/StyledMuiTable/StyledMuiTableRow';
import StyledMuiPaper from '../../parts/surface//StyledMuiPaper';
import CheckCircle from '../../parts/icons/CheckCircle';
import Incomplete from "../../parts/icons/Incomplete";
import DummyEntryDataNc from "../../../libs/Const/DummyEntryDataNc";
import DummyEntryDataOs from "../../../libs/Const/DummyEntryDataOs";

const tabHeaderNc = [
  { 'tabTitle': '基本情報', 'progress': '済'},
  { 'tabTitle': '希望条件', 'progress': null}
];

const tabHeaderOs = [
  {'tabTitle': '基本情報', 'progress': '済'},
  {'tabTitle': '希望条件', 'progress': '済'},
  {'tabTitle': 'OAスキル', 'progress': null},
  {'tabTitle': '経験職種', 'progress': null},
  {'tabTitle': '資格', 'progress': null},
  {'tabTitle': '職歴/学歴', 'progress': null},
  {'tabTitle': '社内用', 'progress': null},
  {'tabTitle': '緊急連絡先', 'progress': '済'},
  {'tabTitle': '給与口座', 'progress': '済'},
  {'tabTitle': '社保・雇用', 'progress': '未'},
  {'tabTitle': '在留カード', 'progress': '未'},
];

const tabPanelListsNc = DummyEntryDataNc();
const tabPanelListsOs = DummyEntryDataOs();
console.log(tabHeaderOs);
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
        <Box sx={{ pt: 3, pr: 3, pb: 1, pl: 3 }}>
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

const division = 'OS';

function ApplicantsEntryInfo() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpenEditInfo = () => setOpen(true);
  const handleCloseEditInfo = () => setOpen(false);
  const handleOpenSendRequest = () => setOpen(true);
  const handleCloseSendRequest = () => setOpen(false);

  const fillIn = 'a';
  


  if(division === 'NC'){
    return (
      <StyledMuiPaper sx={{ width: '100%', height: '73.33333333333333vh' }}>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <StyledMuiTabs value={value} onChange={handleChange} aria-label="basic tabs example" TabIndicatorProps={{ style: { display: 'none' } }}>
              {tabHeaderNc.map((head, i) => {
                return <Tab label={head.tabTitle} {...a11yProps({i})} sx={{ maxWidth: 'initial', minWidth: 'initial', width: '50%' }} iconPosition="end" icon={head.progress === '済' ? <CheckCircle/> : head.progress === '未' ? <Incomplete/> : null}/>
              })}
            </StyledMuiTabs>
          </Box>
          {tabPanelListsNc.map((panel, k) => {
            return (
            <TabPanel value={value} index={k}>
              <div css={styles.titleAndEditBtn}>
                <p className="contentBlockTitle">エントリー情報</p>
                <Button onClick={handleOpenEditInfo} variant="contained">編集</Button>
                <Modal
                  open={open}
                  onClose={handleCloseEditInfo}
                  aria-labelledby="modal-title"
                  aria-describedby="modal-description"
                >
                  <ModalEditEntryInfo/>
                </Modal>
              </div>
              <TableContainer component={Paper} sx={{ my:3, height: '47.22222222222222vh' }}>
                <Table sx={{ minWidth: 250 }} aria-label="simple table">
                {panel.map((item) => {
                  return (
                    <StyledMuiTableRow>
                      <StyledMuiTableHead align="left">{item.thead}</StyledMuiTableHead>
                      <StyledMuiTableCell>{item.tdata}</StyledMuiTableCell>
                    </StyledMuiTableRow>
                  );
                })}
                </Table>
              </TableContainer>
            </TabPanel>
            )
          })}
          {!open ? (<Button onClick={handleOpenSendRequest} variant="contained" sx={{mb:4}}>修正依頼の送信</Button>) : (<div></div>)}
        </Box>
      </StyledMuiPaper>
    );
  }else if(division === 'OS') {
    return (
      <StyledMuiPaper sx={{ minHeight: '73.33333333333333vh' }}>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider', flexWrap: 'wrap' }}>
            <StyledMuiTabs value={value} onChange={handleChange} aria-label="basic tabs example" TabIndicatorProps={{ style: { display: 'none' } }}>
              {tabHeaderOs.map((head, i) => {
                return <Tab label={head.tabTitle} {...a11yProps({i})} sx={{ maxWidth: 'initial', minWidth: 'initial', width: '16.66%' }} iconPosition="end" icon={head.progress === '済' ? <CheckCircle/> : head.progress === '未' ? <Incomplete/> : null}/>
              })}
            </StyledMuiTabs>
          </Box>
          {tabPanelListsOs.map((panel, j) => {
            return (
              <TabPanel value={value} index={j}>
                <div css={styles.titleAndEditBtn}>
                  <p className="contentBlockTitle">エントリー情報</p>
                  <Button onClick={handleOpenEditInfo} variant="contained">編集</Button>
                  <Modal
                    open={open}
                    onClose={handleCloseEditInfo}
                    aria-labelledby="modal-title"
                    aria-describedby="modal-description"
                  >
                    <ModalEditEntryInfo/>
                  </Modal>
                </div>

                
                <TableContainer component={Paper} sx={{ mt:3, height: '65vh' }}>
                  <Table sx={{ minWidth: 250 }} aria-label="simple table">
                  {panel.map((item) => {
                    return (
                      <StyledMuiTableRow>
                        <StyledMuiTableHead align="left">{item.thead}</StyledMuiTableHead>
                        <StyledMuiTableCell>{item.tdata}</StyledMuiTableCell>
                      </StyledMuiTableRow>
                    );
                  })}
                  </Table>
                </TableContainer>
              </TabPanel>
            )
          })}
          
        </Box>
        <Button onClick={handleOpenSendRequest} variant="contained" sx={{mt: 1}}>修正依頼の送信</Button>
      </StyledMuiPaper>
    );
  }
}




const styles = {
  titleAndEditBtn:{
    display: 'flex',
    justifyContent: 'space-between',
  },
  btnArea:{
    background: 'red',
    padding: '1% 0',
  }
}

export default ApplicantsEntryInfo;