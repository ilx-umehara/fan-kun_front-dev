/** @jsxImportSource @emotion/react */
import React from "react";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const SelectedDepartment = () => {
  const [department, setDepartment] = React.useState('');
  const handleChangeDepartment = (event) => {
    setDepartment(event.target.value);
  };
  
  return (
    <FormControl sx={{ mr: 2, minWidth: 120 }} size="small">
    <InputLabel id="department">事業部</InputLabel>
    <Select
      labelId="department"
      id="department"
      value={department}
      label="事業部"
      onChange={handleChangeDepartment}
    >
      <MenuItem value={10}>OS</MenuItem>
      <MenuItem value={20}>NC</MenuItem>
    </Select>
  </FormControl>
  )
}

export default SelectedDepartment;