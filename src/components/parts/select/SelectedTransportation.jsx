/** @jsxImportSource @emotion/react */
import React from "react";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const transportations = [
  '公共交通機関',
  '自家用車',
  '自転車',
  '徒歩',
]

const SelectedTransportation = () => {
  const [transportation, setTransportation] = React.useState('');
  const handleChangeTransportation = (event) => {
    setTransportation(event.target.value);
  };
  
  return (
    <FormControl sx={{ mr: 2, minWidth: 200 }} size="small">
    <Select
      labelId="transportation"
      id="transportation"
      value={transportation}
      displayEmpty

      onChange={handleChangeTransportation}
      renderValue={(selected) => {
        if (selected.length === 0) {
          return <em>選択してください</em>;
        }
        return selected;
      }}
    >
      <MenuItem value="" disabled><em>選択してください</em></MenuItem>
      {transportations.map((item) => (
        <MenuItem value={item}>{item}</MenuItem>
      ))}
    </Select>
  </FormControl>
  )
}

export default SelectedTransportation;