/** @jsxImportSource @emotion/react */
import React from "react";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Const from '../../../libs/Const';

const SelectedBranch = () => {
  const [branch, setBranch] = React.useState('');
  const handleChangeBranch = (event) => {
    setBranch(event.target.value);
  };
  
  return (
    <FormControl sx={{ mr: 2, minWidth: 120 }} size="small">
    <InputLabel id="branch">支店</InputLabel>
    <Select
      labelId="branch"
      id="branch"
      value={branch}
      label="支店"
      onChange={handleChangeBranch}
    >
      {Const.BRANCH_OPTIONS.map((option) => {
          return (
            <MenuItem value={option}>{option}</MenuItem>
          )})
      }
    </Select>
  </FormControl>
  )
}

export default SelectedBranch;