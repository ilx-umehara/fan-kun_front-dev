/** @jsxImportSource @emotion/react */
import React from "react";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Const from '../../../libs/Const';

function SelectedPrefecture() {
  const [prefecture, setPrefecture] = React.useState('');
  const handleChangePrefecture = (event) => {
    setPrefecture(event.target.value);
  };
  
  return (
    <FormControl sx={{ mr: 2, minWidth: 120 }} size="small">
    <InputLabel id="prefecture">都道府県</InputLabel>
    <Select
      labelId="prefecture"
      id="prefecture"
      value={prefecture}
      label="都道府県"
      onChange={handleChangePrefecture}
    >
      {Const.PREF_OPTIONS.map((option) => {
          return (
            <MenuItem value={option}>{option}</MenuItem>
          )})
      }
    </Select>
  </FormControl>
  )
}

export default SelectedPrefecture;