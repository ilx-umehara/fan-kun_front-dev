/** @jsxImportSource @emotion/react */
import React from "react";
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

const EntryForm = () => {
  return (
    <>
      <Paper sx={{ width: '70%', overflow: 'hidden', margin: '40px'}}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </Paper>
    </>
  )
}

export default EntryForm;
