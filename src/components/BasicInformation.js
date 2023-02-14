/** @jsxImportSource @emotion/react */
import React from "react";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ModalApplicantsHistory from './modals/ModalApplicantsHistory'
import personCircleWoman from "../assets/images/person_circle_woman.svg";
import personCircleMan from "../assets/images/person_circle_man.svg";

const StyledBasicTable = styled(Table)(() => ({
  marginTop: '20px',
  width: '100%',
}))
const StyledBasicTableRow = styled(TableRow)(() => ({
  display: 'flex',

  alignItems: 'center',
}))
const StyledBasicTableHead = styled(TableHead)(() => ({
  width: '20%',
  padding: '5px',
}))
const StyledBasicTableCell = styled(TableCell)(() => ({
  width: '30%',
  padding: '5px',
  fontWeight: 'bold',
  fontSize: '1rem',
  marginRight: '10px',
}))


const basicInfoName = [
  { sei_kana: 'オウボ', mei_kana: 'ハナコ',sei_kanji: '応募', mei_kanji: '花子' }
];

const tableCell1 = [
  { 'thead': '応募者ID', 'tdata': '0101038453' },
  { 'thead': '都道府県', 'tdata': '東京都' }
];
const tableCell2 = [
  { 'thead': '生年月日', 'tdata': '2000年01月01日 (23歳)' },
  { 'thead': '電話番号', 'tdata': '090-3333-3333' }
];
const tableCell3 = [
  { 'thead': '性別', 'tdata': '女性' },
  { 'thead': 'メールアドレス', 'tdata': 'oubo@ilovex.co.jp' }
];
const tableCell4 = [
  { 'thead': '応募媒体', 'tdata': 'バイトルドットコム' },
  { 'thead': '現在の職業', 'tdata': '会社員' }
];
const tableDataLists = [tableCell1, tableCell2, tableCell3, tableCell4];

//アイコンの色を男性女性で変更する
const jender = tableCell3[0]['tdata'];
const personCircle = jender === '女性' ? personCircleWoman : personCircleMan;



function BasicInformation() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return(
    <>
      <div className="contentBlock" css={styles.contentBasicInformation}>
        <div css={styles.flex}>
          <div css={styles.basicInfoName}>
            <img css={styles.icon} src={personCircle} alt="アイコン" />
            {basicInfoName.map((name) => {
              return(
                <div css={styles.name}>
                  <p>{name.sei_kana}&emsp;{name.mei_kana}</p>
                  <h2>{name.sei_kanji}&emsp;{name.mei_kanji}</h2>
                </div>
              )
            })}
          </div>
          <Button onClick={handleOpen} variant="contained">応募履歴</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
              <ModalApplicantsHistory />
          </Modal>
        </div>
        <TableContainer>
          <StyledBasicTable sx={{ minWidth: 250 }} aria-label="simple table">
            {tableDataLists.map((record) => {
              return (
                <StyledBasicTableRow>
                  {record.map((item) => {
                    return(
                      <>
                        <StyledBasicTableHead align="left">{item.thead}</StyledBasicTableHead>
                        <StyledBasicTableCell>{item.tdata}</StyledBasicTableCell>
                      </>
                    )
                  })}
                </StyledBasicTableRow>
              );})
            }
          </StyledBasicTable>
        </TableContainer>
      </div>
    </>
  );
}

const styles = {
  flex:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon:{
    height: '50px',
    marginRight: '20px',
  },
  name:{
    textAlign: 'center',
  },
  contentBasicInformation:{
    margin: '15px 40px 30px 40px',
    height: '20vh',
    fontSize:'0.8em',
  },
  contentsHeaderTitle:{
    display: 'inline-block',
    height: '30px',
    backgroundColor: '#c6e0f7',
    padding: '0 20px',
  },
  basicInfoName:{
    display: 'flex',
    justifyContent: '',
    alignItems: 'center',
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