/** @jsxImportSource @emotion/react */
import React from "react";
import { styled } from '@mui/material/styles';
import TableRow from '@mui/material/TableRow';

const StyledSideToSideTableRow = styled(TableRow)(() => ({
  display: 'flex',
  alignItems: 'center',
}))

export default StyledSideToSideTableRow;