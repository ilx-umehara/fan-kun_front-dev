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
import { TableHead } from "@mui/material";

function createData(date, action, comment, status, web_entry, web_reserve, identification) {
  return { date, action, comment, status, web_entry, web_reserve, identification };
}

const contactDatas = [
  createData('2022年10月04日', '通知メール', 'エリア1の登録が完了しました', '変更なし', '初回版再送', '案内メール送信', '提示依頼済み'),
  createData('2022年10月04日', '通知メール', 'エリア1の登録が完了しました', '変更なし', '初回版再送', '案内メール送信', '提示依頼済み'),
  // createData('2022年10月04日', '通知メール', 'エリア1の登録が完了しました', '変更なし', '初回版再送', '案内メール送信', '提示依頼済み'),
  // createData('2022年10月04日', '通知メール', 'エリア1の登録が完了しました', '変更なし', '初回版再送', '案内メール送信', '提示依頼済み'),
  // createData('2022年10月04日', '通知メール', 'エリア1の登録が完了しました', '変更なし', '初回版再送', '案内メール送信', '提示依頼済み'),
  // createData('2022年10月04日', '通知メール', 'エリア1の登録が完了しました', '変更なし', '初回版再送', '案内メール送信', '提示依頼済み'),
  // createData('2022年10月04日', '通知メール', 'エリア1の登録が完了しました', '変更なし', '初回版再送', '案内メール送信', '提示依頼済み'),
  // createData('2022年10月04日', '通知メール', 'エリア1の登録が完了しました', '変更なし', '初回版再送', '案内メール送信', '提示依頼済み'),
  // createData('2022年10月04日', '通知メール', 'エリア1の登録が完了しました', '変更なし', '初回版再送', '案内メール送信', '提示依頼済み'),
  // createData('2022年10月04日', '通知メール', 'エリア1の登録が完了しました', '変更なし', '初回版再送', '案内メール送信', '提示依頼済み'),
  // createData('2022年10月04日', '通知メール', 'エリア1の登録が完了しました', '変更なし', '初回版再送', '案内メール送信', '提示依頼済み'),
  // createData('2022年10月04日', '通知メール', 'エリア1の登録が完了しました', '変更なし', '初回版再送', '案内メール送信', '提示依頼済み'),
  // createData('2022年10月04日', '通知メール', 'エリア1の登録が完了しました', '変更なし', '初回版再送', '案内メール送信', '提示依頼済み'),
  // createData('2022年10月04日', '通知メール', 'エリア1の登録が完了しました', '変更なし', '初回版再送', '案内メール送信', '提示依頼済み'),
  // createData('2022年10月04日', '通知メール', 'エリア1の登録が完了しました', '変更なし', '初回版再送', '案内メール送信', '提示依頼済み'),
  // createData('2022年10月04日', '通知メール', 'エリア1の登録が完了しました', '変更なし', '初回版再送', '案内メール送信', '提示依頼済み'),
  // createData('2022年10月04日', '通知メール', 'エリア1の登録が完了しました', '変更なし', '初回版再送', '案内メール送信', '提示依頼済み'),
  // createData('2022年10月04日', '通知メール', 'エリア1の登録が完了しました', '変更なし', '初回版再送', '案内メール送信', '提示依頼済み'),
  // createData('2022年10月04日', '通知メール', 'エリア1の登録が完了しました', '変更なし', '初回版再送', '案内メール送信', '提示依頼済み'),
  // createData('2022年10月04日', '通知メール', 'エリア1の登録が完了しました', '変更なし', '初回版再送', '案内メール送信', '提示依頼済み'),
  // createData('2022年10月04日', '通知メール', 'エリア1の登録が完了しました', '変更なし', '初回版再送', '案内メール送信', '提示依頼済み'),
  // createData('2022年10月04日', '通知メール', 'エリア1の登録が完了しました', '変更なし', '初回版再送', '案内メール送信', '提示依頼済み'),
  // createData('2022年10月04日', '通知メール', 'エリア1の登録が完了しました', '変更なし', '初回版再送', '案内メール送信', '提示依頼済み'),
  // createData('2022年10月04日', '通知メール', 'エリア1の登録が完了しました', '変更なし', '初回版再送', '案内メール送信', '提示依頼済み'),
  // createData('2022年10月04日', '通知メール', 'エリア1の登録が完了しました', '変更なし', '初回版再送', '案内メール送信', '提示依頼済み'),
  // createData('2022年10月04日', '通知メール', 'エリア1の登録が完了しました', '変更なし', '初回版再送', '案内メール送信', '提示依頼済み'),
  // createData('2022年10月04日', '通知メール', 'エリア1の登録が完了しました', '変更なし', '初回版再送', '案内メール送信', '提示依頼済み'),
];

function ApplicantsContactHistory(){
  const [openRegist, setOpenRegist] = React.useState(false);
  const handleOpenRegist = () => setOpenRegist(true);
  const handleCloseRegist = () => setOpenRegist(false);

  const [openMoreHistory, setOpenMoreHistory] = React.useState(false);
  const handleOpenMoreHistory = () => setOpenMoreHistory(true);
  const handleCloseMoreHistory = () => setOpenMoreHistory(false);

  return (
    <StyledMuiPaper sx={{ width: '100%', minHeight: '35vh', p: 3 }}>

        <div css={styles.titleAndEditBtn}>
          <p className="contentBlockTitle">対応履歴</p>
          <StyledMuiBtnBlue onClick={handleOpenRegist} variant="contained">新規登録</StyledMuiBtnBlue>
        </div>
        <TableContainer component={Paper} sx={{ width: 'initial', height: '', px:1, py:1, fontSize: '0.625rem' }}>
          <Table>
                <TableHead>
                  <TableCell css={styles.tableHeader}>日時</TableCell>
                  <TableCell css={styles.tableHeader}>対応内容</TableCell>
                  <TableCell css={styles.tableHeader}>ステータス</TableCell>
                  <TableCell css={styles.tableHeader}>Webエントリー</TableCell>
                  <TableCell css={styles.tableHeader}>Web予約</TableCell>
                  <TableCell css={styles.tableHeader}>本人確認書類</TableCell>
                </TableHead>
              {contactDatas.map((contactData) => (
                <TableRow>
                  <TableCell sx={{ fontSize: '0.625rem', padding: '10px 3px', color: '#0047A4', }}>{contactData.date}<br/>{contactData.action}</TableCell>
                  <TableCell sx={{ fontSize: '0.625rem', padding: '10px 3px', color: '#0047A4', }}>{contactData.comment}</TableCell>
                  <TableCell sx={{ fontSize: '0.625rem', padding: '10px 3px', color: '#0047A4', }}>{contactData.status}</TableCell>
                  <TableCell sx={{ fontSize: '0.625rem', padding: '10px 3px', color: '#0047A4', }}>{contactData.web_entry}</TableCell>
                  <TableCell sx={{ fontSize: '0.625rem', padding: '10px 3px', color: '#0047A4', }}>{contactData.web_reserve}</TableCell>
                  <TableCell sx={{ fontSize: '0.625rem', padding: '10px 3px', color: '#0047A4', }}>{contactData.identification}</TableCell>
                </TableRow>
              ))}
          </Table>
        </TableContainer>
        <div css={styles.moreHistoryBtnBlock}>
          <Button onClick={handleOpenMoreHistory} variant="contained" css={styles.moreHistoryBtn}>履歴をもっと見る</Button>
        </div>
    </StyledMuiPaper>
  );
}

const styles = {
  tableHeader: {
    fontSize: '0.625rem',
    padding: '3px',
    color: '#0047A4',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  titleAndEditBtn:{
    display: 'flex',
    justifyContent: 'space-between',

  },
  tdata:{
    padding: '5px 16px',
    borderBottom: 'initial',
    color: '#0047A4',
    verticalAlign: 'baseline',
  },
  moreHistoryBtnBlock:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

  },
  moreHistoryBtn:{
    transform: 'scale(0.75)',
    transformOrigin: 'center bottom',
  }
}

export default ApplicantsContactHistory;