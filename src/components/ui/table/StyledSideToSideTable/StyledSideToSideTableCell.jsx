/** @jsxImportSource @emotion/react */
import React from "react";
import { styled } from '@mui/material/styles';
import TableCell from '@mui/material/TableCell';

const StyledSideToSideTableCell = styled(TableCell)(() => ({
  width: '60%',
  padding: '5px',
  fontWeight: 'bold',
  fontSize: '0.8rem',
  marginRight: '10px',
}))

export default StyledSideToSideTableCell;