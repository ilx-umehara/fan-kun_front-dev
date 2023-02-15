/** @jsxImportSource @emotion/react */
import React from "react";
import TableContainer from '@mui/material/TableContainer';

import StyledMuiPaper from '../../parts/surface/StyledMuiPaper';
import StyledSideToSideTable from '../../parts/table/StyledSideToSideTable/StyledSideToSideTable';
import StyledSideToSideTableCell from '../../parts/table/StyledSideToSideTable/StyledSideToSideTableCell';
import StyledSideToSideTableHead from '../../parts/table/StyledSideToSideTable/StyledSideToSideTableHead';
import StyledSideToSideTableRow from '../../parts/table/StyledSideToSideTable/StyledSideToSideTableRow';


const tableDataLists = [
  { 'thead': '本人確認書類', 'tdata': '未対応' },
  { 'thead': 'ネット予約', 'tdata': '未対応' },
  { 'thead': 'Webエントリー', 'tdata': '初回用送付・済' },
];

function ApplicantStatus() {
  return (
    <StyledMuiPaper sx={{ flexShrink: '0', width: '100%' }}>
      <div className="contentBlock" css={styles.contentStatus}>
        <div css={styles.statusHeader}>
            <h2>呼び込み中</h2>
            <span>&emsp;(強制クローズまで&nbsp;</span><span>3日&nbsp;)</span>
        </div>
        <div css={styles.statusItme}>
          <TableContainer>
            <StyledSideToSideTable sx={{ minWidth: 250 }} aria-label="simple table">
              {tableDataLists.map((item) => {
              return (
                  <StyledSideToSideTableRow>
                    <StyledSideToSideTableHead align="left">{item.thead}</StyledSideToSideTableHead>
                    <StyledSideToSideTableCell>{item.tdata}</StyledSideToSideTableCell>
                  </StyledSideToSideTableRow>
                );
              })}
            </StyledSideToSideTable>
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
      </StyledMuiPaper>
  );
}

const styles = {
  contentStatus:{
    margin: '15px 40px 30px 40px',
    fontSize:'0.8em',
  },
  statusHeader:{
    display: 'flex',
    width: '50%',
    height: '50px',
    margin: '0 auto',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottom: '1px solid #0047a4',
  },
  statusItme:{
    display: 'flex',
    justifyContent: 'spaceBetween',
    alignItems: 'center',
    height: '12.70277777777778vh'

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