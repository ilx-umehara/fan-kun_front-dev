/** @jsxImportSource @emotion/react */
import React from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const StyledBasicTable = styled(Table)(() => ({
  marginTop: '20px',
  width: '90%',
}))
const StyledBasicTableRow = styled(TableRow)(() => ({
  display: 'flex',

  alignItems: 'center',
}))
const StyledBasicTableHead = styled(TableHead)(() => ({
  width: '40%',
  padding: '5px',
}))
const StyledBasicTableCell = styled(TableCell)(() => ({
  width: '60%',
  padding: '5px',
  fontWeight: 'bold',
  marginRight: '10px',
}))

const tableDataLists = [
  { 'thead': '本人確認書類', 'tdata': '未対応' },
  { 'thead': 'ネット予約', 'tdata': '未対応' },
  { 'thead': 'Webエントリー', 'tdata': '初回用送付・済' },
];

function ApplicantStatus() {
  return (
    <>
      <div className="contentBlock" css={styles.contentStatus}>
        <div css={styles.statusHeader}>
            <h2>呼び込み中</h2>
            <span>&emsp;(強制クローズまで&nbsp;</span><span>3日&nbsp;)</span>
        </div>
        <div css={styles.statusItme}>
          <TableContainer>
            <StyledBasicTable sx={{ minWidth: 250 }} aria-label="simple table">
              {tableDataLists.map((item) => {
              return (
                  <StyledBasicTableRow>
                    <StyledBasicTableHead>{item.thead}</StyledBasicTableHead>
                    <StyledBasicTableCell>{item.tdata}</StyledBasicTableCell>
                  </StyledBasicTableRow>
                );
              })}
            </StyledBasicTable>
          </TableContainer>
          <div css={styles.statusFigure}>
            <div>
              <p>エリア1</p>
              <p>済</p>
            </div>
            <div>
              <p>エリア2</p>
              <p>済</p>
            </div>
            <div>
              <p>エリア3</p>
              <p>未</p>
            </div>
            <div>
              <p>エリア4</p>
              <p>未</p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

const styles = {
  contentStatus:{
    height: '25vh',
  },
  statusHeader:{
    display: 'flex',
    width: '50%',
    margin: '0 auto',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottom: '1px solid #0047a4',
  },
  statusItme:{
    display: 'flex',
    justifyContent: 'spaceBetween',
    alignItems: 'center',
    marginTop: '20px'
  },
  statusFigure:{
    minWidth: '50%',
    display: 'flex',
    justifyContent: 'space-around',
    background: '#F0F0F0',
    padding: '20px 0',
  }
}

export default ApplicantStatus;