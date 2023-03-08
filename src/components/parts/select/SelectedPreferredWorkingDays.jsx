/** @jsxImportSource @emotion/react */
import React from "react";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const workingDays = [
  '週1',
  '週2',
  '週3',
  '週4',
  '週5',
  '週6',
  '週7',
]

function SelectedPreferredWorkingDays() {
  const [workingDay, setWorkingDay] = React.useState('');
  const handleChangeWorkingDay = (event) => {
    setWorkingDay(event.target.value);
  };
  
  return (
    <FormControl sx={{ mr: 2, minWidth: 200 }} size="small">
    <Select
      labelId="workingDay"
      id="workingDay"
      value={workingDay}
      displayEmpty

      onChange={handleChangeWorkingDay}
      renderValue={(selected) => {
        if (selected.length === 0) {
          return <em>選択してください</em>;
        }
        return selected;
      }}
    >
      <MenuItem value="" disabled><em>選択してください</em></MenuItem>
      {workingDays.map((item) => (
        <MenuItem value={item}>{item}</MenuItem>
      ))}
    </Select>
  </FormControl>
  )
}

export default SelectedPreferredWorkingDays;