/** @jsxImportSource @emotion/react */
import React from "react";

import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TableContainer from '@mui/material/TableContainer';
import ModalApplicantsHistory from '../modals/ModalApplicantsHistory';
import PersonCircleWoman from "../../parts/icons/PersonCircleWoman";
import PersonCircleMan from "../../parts/icons/PersonCircleMan";

import StyledMuiPaper from '../../parts/surface/StyledMuiPaper';
import StyledSideToSideTable from '../../parts/table/StyledSideToSideTable/StyledSideToSideTable';
import StyledSideToSideTableCell from '../../parts/table/StyledSideToSideTable/StyledSideToSideTableCell';
import StyledSideToSideTableHead from '../../parts/table/StyledSideToSideTable/StyledSideToSideTableHead';
import StyledSideToSideTableRow from '../../parts/table/StyledSideToSideTable/StyledSideToSideTableRow';
import StyledMuiBtnBlue from '../../parts/button/StyledMuiBtnBlue';



const basicInfoName = [
  { sei_kana: 'オウボ', mei_kana: 'ハナコ',sei_kanji: '応募', mei_kanji: '花子', appli_id: '454275765' }
];

// const tableCell1 = [
//   { 'thead': '応募者ID', 'tdata': '0101038453' },
//   { 'thead': '都道府県', 'tdata': '東京都' },
//   { 'thead': '応募支店', 'tdata': 'NC池袋支店' },
// ];
// const tableCell2 = [
//   { 'thead': '生年月日', 'tdata': '2000年01月01日' },
//   { 'thead': '電話番号', 'tdata': '090-3333-3333' },
//   { 'thead': '担当支店', 'tdata': 'NC池袋支店' }
// ];
// const tableCell3 = [
//   { 'thead': '性別', 'tdata': '女性' },
//   { 'thead': 'アドレス', 'tdata': 'oubo@ilovex.co.jp' },
//   { 'thead': '登録完了支店', 'tdata': 'NC新宿支店' }
// ];
// const tableCell4 = [
//   { 'thead': '応募媒体', 'tdata': 'マイナビバイト' },
//   { 'thead': '現在の職業', 'tdata': '会社員' },
//   { 'thead': '', 'tdata': '' },
// ];
// const tableBasicDataLists = [tableCell1, tableCell2, tableCell3, tableCell4];

const tableStatusDataLists = [
  { 'thead': '本人確認書類', 'tdata': '未対応' },
  { 'thead': 'ネット予約', 'tdata': '未対応' },
  { 'thead': 'Webエントリ', 'tdata': '初回用送付・済' },
];
const tableBasicDataLists = [
  { 'thead': '生年月日', 'tdata': '2000年01月01日' }, 
  { 'thead': '住所', 'tdata': '東京都中央区' }, 
  { 'thead': '', 'tdata': '人形町3-3-13' }, 
  { 'thead': '', 'tdata': 'フォレストビル2F'},
  { 'thead': '電話番号', 'tdata': '090-3333-3333' }, 
  { 'thead': '', 'tdata': '090-3333-3333' }, 
  { 'thead': 'メールアドレス', 'tdata': 'oubo@ilovex.co.jp' }, 
  { 'thead': '', 'tdata': 'oubo@ilovex.co.jp' }, 
];

//アイコンの色を男性女性で変更する
const jender = '女性';
const personCircle = jender === '女性' ? <PersonCircleWoman sx={{ width: '0rem' }}/> : <PersonCircleMan sx={{ width: '1rem' }}/>

console.log(tableBasicDataLists);

function BasicInformation() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return(
    <StyledMuiPaper sx={{ width: '100%', height: '100%', p: 3 }}>
      <div className="contentBlock" css={styles.contentBasicInformation}>
        <div css={styles.flex}>
          <div css={styles.basicInfoName}>
            {personCircle}
            {basicInfoName.map((name) => {
              return(
                <div css={styles.nameArea}>
                  <p>{name.sei_kana}&emsp;{name.mei_kana}</p>
                  <h2>{name.sei_kanji}&emsp;{name.mei_kanji}</h2>
                  <p>応募者ID:{name.appli_id}</p>
                </div>
              )
            })}
          </div>
        </div>
        <StyledMuiBtnBlue onClick={handleOpen} variant="contained">応募履歴</StyledMuiBtnBlue>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            >
              <ModalApplicantsHistory />
          </Modal>
        <TableContainer>
          <StyledSideToSideTable aria-label="simple table">
            {tableBasicDataLists.map((record) => {
              return (
                <StyledSideToSideTableRow>
                  <StyledSideToSideTableHead align="left">{record.thead}</StyledSideToSideTableHead>
                  <StyledSideToSideTableCell>{record.tdata}</StyledSideToSideTableCell>
                </StyledSideToSideTableRow>
              )})
            }
          </StyledSideToSideTable>
        </TableContainer>
      </div>
    </StyledMuiPaper>
  );
}

const styles = {
  statusHeader:{
    fontSize: '0.6rem',
    display: 'flex',
    alignItems: 'center',
    height: '2.375rem',
    borderBottom: '1px solid #0047a4',
  },
  flex:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  nameArea:{
    width: '12rem',
    textAlign: 'center',
  },
  contentBasicInformation:{
    fontSize:'0.625rem',
  },

  basicInfoName:{
    display: 'flex',
    justifyContent: '',
    alignItems: 'center',
  },
  statusTable:{
    width: '33%',
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '2.5rem'
  },
  statusThead:{

  },
  statusTdata:{
    width: '50%',
    marginRight: '1.5rem',
    fontWeight: 'bold',
    borderBottom: '1px solid rgba(224, 224, 224, 1)'
  },
  modal:{
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '75%',
    backgroundColor: '#FFF',
    borderRadius: '0.25rem',
    padding: '15px 20px',
  }
}



export default BasicInformation;