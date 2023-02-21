/** @jsxImportSource @emotion/react */
import React from "react";
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Tab from '@mui/material/Tab';

import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';

import ApplicantsEntryInfo from '../ApplicantsDetail/ApplicantsEntryInfo';

import StyledMuiTabs from '../../parts/tab/StyledMuiTabs';
import StyledMuiTableCell from '../../parts/table/StyledMuiTable/StyledMuiTableCell';
import StyledMuiTableHead from '../../parts/table/StyledMuiTable/StyledMuiTableHead';
import StyledMuiTableRow from '../../parts/table/StyledMuiTable/StyledMuiTableRow';
import StyledMuiPaper from '../../parts/surface//StyledMuiPaper';

const styles = {
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

export default function() {
  return (
    <Box css={styles.modal}>
      <ApplicantsEntryInfo/>
    </Box>
  )
}