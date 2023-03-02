/** @jsxImportSource @emotion/react */
import React from "react";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const SelectedTransportation = () => {
  const [transportation, setTransportation] = React.useState('');
  const handleChangeTransportation = (event) => {
    setTransportation(event.target.value);
  };
  
  return (
    <FormControl sx={{ mr: 2, minWidth: 200 }} size="small">
    <InputLabel id="transportation">交通手段</InputLabel>
    <Select
      labelId="transportation"
      id="transportation"
      value={transportation}
      label="交通手段"
      onChange={handleChangeTransportation}
    >
      <MenuItem value={10}>公共交通機関</MenuItem>
      <MenuItem value={20}>自家用車</MenuItem>
      <MenuItem value={30}>自転車</MenuItem>
      <MenuItem value={40}>徒歩</MenuItem>
    </Select>
  </FormControl>
  )
}

export default SelectedTransportation;