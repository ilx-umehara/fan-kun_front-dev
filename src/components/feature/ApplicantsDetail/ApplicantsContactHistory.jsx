/** @jsxImportSource @emotion/react */
import React from "react";
import StyledMuiPaper from '../../parts/surface/StyledMuiPaper';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import StyledMuiBtnBlue from '../../parts/button/StyledMuiBtnBlue';

function createData(date, action, comment, status, web_entry, web_reserve, identification) {
  return { date, action, comment, status, web_entry, web_reserve, identification };
}

const contactDatas = [
  createData('2022年10月04日', '通知メール', 'エリア1の登録が完了しました', '変更なし', '初回版再送', '案内メール送信', '提示依頼済み'),
  createData('2022年10月04日', '通知メール', 'エリア1の登録が完了しました', '変更なし', '初回版再送', '案内メール送信', '提示依頼済み'),
  createData('2022年10月04日', '通知メール', 'エリア1の登録が完了しました', '変更なし', '初回版再送', '案内メール送信', '提示依頼済み'),
  createData('2022年10月04日', '通知メール', 'エリア1の登録が完了しました', '変更なし', '初回版再送', '案内メール送信', '提示依頼済み'),
  createData('2022年10月04日', '通知メール', 'エリア1の登録が完了しました', '変更なし', '初回版再送', '案内メール送信', '提示依頼済み'),
  createData('2022年10月04日', '通知メール', 'エリア1の登録が完了しました', '変更なし', '初回版再送', '案内メール送信', '提示依頼済み'),
  createData('2022年10月04日', '通知メール', 'エリア1の登録が完了しました', '変更なし', '初回版再送', '案内メール送信', '提示依頼済み'),
  createData('2022年10月04日', '通知メール', 'エリア1の登録が完了しました', '変更なし', '初回版再送', '案内メール送信', '提示依頼済み'),
  createData('2022年10月04日', '通知メール', 'エリア1の登録が完了しました', '変更なし', '初回版再送', '案内メール送信', '提示依頼済み'),
  createData('2022年10月04日', '通知メール', 'エリア1の登録が完了しました', '変更なし', '初回版再送', '案内メール送信', '提示依頼済み'),
  createData('2022年10月04日', '通知メール', 'エリア1の登録が完了しました', '変更なし', '初回版再送', '案内メール送信', '提示依頼済み'),
  createData('2022年10月04日', '通知メール', 'エリア1の登録が完了しました', '変更なし', '初回版再送', '案内メール送信', '提示依頼済み'),
  createData('2022年10月04日', '通知メール', 'エリア1の登録が完了しました', '変更なし', '初回版再送', '案内メール送信', '提示依頼済み'),
  createData('2022年10月04日', '通知メール', 'エリア1の登録が完了しました', '変更なし', '初回版再送', '案内メール送信', '提示依頼済み'),
  createData('2022年10月04日', '通知メール', 'エリア1の登録が完了しました', '変更なし', '初回版再送', '案内メール送信', '提示依頼済み'),
  createData('2022年10月04日', '通知メール', 'エリア1の登録が完了しました', '変更なし', '初回版再送', '案内メール送信', '提示依頼済み'),
  createData('2022年10月04日', '通知メール', 'エリア1の登録が完了しました', '変更なし', '初回版再送', '案内メール送信', '提示依頼済み'),
  createData('2022年10月04日', '通知メール', 'エリア1の登録が完了しました', '変更なし', '初回版再送', '案内メール送信', '提示依頼済み'),
  createData('2022年10月04日', '通知メール', 'エリア1の登録が完了しました', '変更なし', '初回版再送', '案内メール送信', '提示依頼済み'),
  createData('2022年10月04日', '通知メール', 'エリア1の登録が完了しました', '変更なし', '初回版再送', '案内メール送信', '提示依頼済み'),
  createData('2022年10月04日', '通知メール', 'エリア1の登録が完了しました', '変更なし', '初回版再送', '案内メール送信', '提示依頼済み'),
  createData('2022年10月04日', '通知メール', 'エリア1の登録が完了しました', '変更なし', '初回版再送', '案内メール送信', '提示依頼済み'),
  createData('2022年10月04日', '通知メール', 'エリア1の登録が完了しました', '変更なし', '初回版再送', '案内メール送信', '提示依頼済み'),
  createData('2022年10月04日', '通知メール', 'エリア1の登録が完了しました', '変更なし', '初回版再送', '案内メール送信', '提示依頼済み'),
  createData('2022年10月04日', '通知メール', 'エリア1の登録が完了しました', '変更なし', '初回版再送', '案内メール送信', '提示依頼済み'),
  createData('2022年10月04日', '通知メール', 'エリア1の登録が完了しました', '変更なし', '初回版再送', '案内メール送信', '提示依頼済み'),
  createData('2022年10月04日', '通知メール', 'エリア1の登録が完了しました', '変更なし', '初回版再送', '案内メール送信', '提示依頼済み'),
];

function ApplicantsContactHistory(){
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <StyledMuiPaper sx={{ width: '100%', minHeight: '45vh', p: 3 }}>

        <div css={styles.titleAndEditBtn}>
          <p className="contentBlockTitle">対応履歴</p>
          <StyledMuiBtnBlue onClick={handleOpen} variant="contained">新規登録</StyledMuiBtnBlue>
        </div>
        <TableContainer component={Paper} sx={{ width: 'initial', height: '30vh', px:1, py:1, fontSize: '0.625rem' }}>
          <Table>
              {contactDatas.map((contactData) => (
                <TableRow>
                  <TableCell sx={{ fontSize: '0.8rem', padding: '10px 3px', color: '#0047A4', }}>{contactData.date}<br/>{contactData.action}</TableCell>
                  <TableCell sx={{ fontSize: '0.8rem', padding: '10px 3px', color: '#0047A4', }}>{contactData.comment}</TableCell>
                  <TableCell sx={{ fontSize: '0.8rem', padding: '10px 3px', color: '#0047A4', }}>{contactData.status}</TableCell>
                  <TableCell sx={{ fontSize: '0.8rem', padding: '10px 3px', color: '#0047A4', }}>{contactData.web_entry}</TableCell>
                  <TableCell sx={{ fontSize: '0.8rem', padding: '10px 3px', color: '#0047A4', }}>{contactData.web_reserve}</TableCell>
                  <TableCell sx={{ fontSize: '0.8rem', padding: '10px 3px', color: '#0047A4', }}>{contactData.identification}</TableCell>
                </TableRow>
              ))}
          </Table>
        </TableContainer>

    </StyledMuiPaper>
  );
}

const styles = {

  titleAndEditBtn:{
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1.125rem',
  },
  tdata:{
    padding: '5px 16px',
    borderBottom: 'initial',
    color: '#0047A4',
    verticalAlign: 'baseline',
  }
}

export default ApplicantsContactHistory;