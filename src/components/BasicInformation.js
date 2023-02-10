/** @jsxImportSource @emotion/react */
import React from "react";
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Table from '@mui/material/Table';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import personCircleWoman from "../assets/images/person_circle_woman.svg";
// import personCircleMan from "../assets/images/person_circle_man.svg";

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
  marginRight: '10px',
}))

const StyledHistoryTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0047a4',
    borderBottom: '2px solid #0047a4',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: '#0047a4',
  },
}));

const StyledHistoryTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


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


function createData(alive, oubo_date, oubo_shiten, media, yuukou, latest_status, name, birthday, address, tel, email) {
  return { alive, oubo_date, oubo_shiten, media, yuukou, latest_status, name, birthday, address, tel, email };
}

const rows = [
  createData('', '2022/01/28', 'NC渋谷', 'ウェブアグレ', '無効(同時)', '', '応募花子(女性)', '1999/01/01', '東京都中央区日本橋人形町3-3-13人形町フォレストビル2F', '090-3333-3333', 'oubo@ilovex.co.jp'),
  createData('★', '2022/01/28', 'NC渋谷', 'バイトルドットコム', '有効', '', '応募花子(女性)', '1999/01/01', '東京都中央区日本橋人形町3-3-13人形町フォレストビル2F', '090-3333-3333', 'oubo@ilovex.co.jp'),
  createData('', '2021/12/13', 'NC渋谷', 'マイナビバイト', '無効', '来社せず', '応募花子(女性)', '1999/01/01', '新潟県新潟市中央区上大川前通三番町26-7BUENA上大川前通3-II307', '090-3333-3333', 'oubo_fake_dummy@ilovex.co.jp'),
  createData('', '2020/07/05', 'NC渋谷', 'おうぼ受ける君', '無効(同時)', '', '勅使河原花子(女性)', '1999/01/01', '東京都中央区日本橋人形町3-3-13人形町フォレストビル2F', '090-3333-3333', 'oubo_fake_dummy@ilovex.co.jp'),
];


function BasicInformation() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return(
    <>
      <div css={styles.contentBlock}>
          <div css={styles.flex}>
            <div css={styles.basicInfoName}>
              <img css={styles.icon} src={personCircleWoman} alt="アイコン" />
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
              <Box css={styles.modal}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  <h4 css={styles.contentsHeaderTitle}>応募履歴一覧</h4>
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                      <TableRow>
                        <StyledHistoryTableCell>Alive</StyledHistoryTableCell>
                        <StyledHistoryTableCell>応募日</StyledHistoryTableCell>
                        <StyledHistoryTableCell>応募支店</StyledHistoryTableCell>
                        <StyledHistoryTableCell>媒体</StyledHistoryTableCell>
                        <StyledHistoryTableCell>有効・無効</StyledHistoryTableCell>
                        <StyledHistoryTableCell>最終ステータス</StyledHistoryTableCell>
                        <StyledHistoryTableCell>名前(性別)</StyledHistoryTableCell>
                        <StyledHistoryTableCell>生年月日</StyledHistoryTableCell>
                        <StyledHistoryTableCell>住所</StyledHistoryTableCell>
                        <StyledHistoryTableCell>電話番号</StyledHistoryTableCell>
                        <StyledHistoryTableCell>メールアドレス</StyledHistoryTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <StyledHistoryTableRow key={row.name}>
                          <StyledHistoryTableCell align="center">{row.alive}</StyledHistoryTableCell>
                          <StyledHistoryTableCell align="left">{row.oubo_date}</StyledHistoryTableCell>
                          <StyledHistoryTableCell align="left">{row.oubo_shiten}</StyledHistoryTableCell>
                          <StyledHistoryTableCell align="left">{row.media}</StyledHistoryTableCell>
                          <StyledHistoryTableCell align="left">{row.yuukou}</StyledHistoryTableCell>
                          <StyledHistoryTableCell align="left">{row.latest_status}</StyledHistoryTableCell>
                          <StyledHistoryTableCell align="left">{row.name}</StyledHistoryTableCell>
                          <StyledHistoryTableCell align="left">{row.birthday}</StyledHistoryTableCell>
                          <StyledHistoryTableCell align="left">{row.address}</StyledHistoryTableCell>
                          <StyledHistoryTableCell align="left">{row.tel}</StyledHistoryTableCell>
                          <StyledHistoryTableCell align="left">{row.email}</StyledHistoryTableCell>
                        </StyledHistoryTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                </Typography>
              </Box>
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
                          <StyledBasicTableHead>{item.thead}</StyledBasicTableHead>
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
  contentBlock:{
    backgroundColor: '#ffffff',
    fontSize: '0.8em',
    padding: '15px 40px 30px 40px',
    borderRadius: '0.25rem',
    maxHeight: '300px',
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