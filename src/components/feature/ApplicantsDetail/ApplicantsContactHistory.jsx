/** @jsxImportSource @emotion/react */
import React from "react";
import { styled } from '@mui/material/styles';
import StyledMuiPaper from '../../ui/surface/StyledMuiPaper';
import Button from '@mui/material/Button';

function ApplicantsContactHistory(){
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <StyledMuiPaper>
      <div css={styles.titleAndEditBtn}>
        <p className="contentBlockTitle">コンタクト履歴</p>
        <Button onClick={handleOpen} variant="contained">新規登録</Button>
      </div>
    </StyledMuiPaper>
  );
}

const styles = {

  titleAndEditBtn:{
    display: 'flex',
    justifyContent: 'space-between',
  },
  tdata:{
    padding: '5px 16px',
    borderBottom: 'initial',
    color: '#0047A4',
    verticalAlign: 'baseline',
  }
}

export default ApplicantsContactHistory;