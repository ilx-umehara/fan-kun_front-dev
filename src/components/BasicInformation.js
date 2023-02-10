/** @jsxImportSource @emotion/react */
import React from "react";
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import personCircleWoman from "../assets/images/person_circle_woman.svg";
// import personCircleMan from "../assets/images/person_circle_man.svg";
const StyledTable = styled(Table)(() => ({
  marginTop: '20px',
  width: '100%',
}))
const StyledTableRow = styled(TableRow)(() => ({
  display: 'flex',

  alignItems: 'center',
}))
const StyledTableHead = styled(TableHead)(() => ({
  width: '20%',
  padding: '5px',
}))
const StyledTableCell = styled(TableCell)(() => ({
  width: '30%',
  padding: '5px',
  fontWeight: 'bold',
  marginRight: '10px',
}))

// const tableCellLists = [
//   {'応募者ID': '0101038453'},
//   {'都道府県': '東京都'},
//   {'生年月日': '2000年01月01日 (23歳)'},
//   {'電話番号': '090-3333-3333'},
//   {'性別': '女性'},
//   {'メールアドレス': 'oubo@ilovex.co.jp'},
//   {'応募媒体': 'バイトルドットコム'},
//   {'現在の職業': '	会社員'},
// ];

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
                  Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
              </Box>
            </Modal>
          </div>

          <TableContainer>
            <StyledTable sx={{ minWidth: 250 }} aria-label="simple table">
              {tableDataLists.map((record) => {
                return (
                  <StyledTableRow>
                    {record.map((item) => {
                      return(
                        <>
                          <StyledTableHead>{item.thead}</StyledTableHead>
                          <StyledTableCell>{item.tdata}</StyledTableCell>
                        </>
                      )
                    })}
                  </StyledTableRow>
                );})
              }
            </StyledTable>
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