/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { styled } from '@mui/material/styles';

import FormControl from "@mui/material/FormControl";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

const priorityMenuItems = [
  '時間給・給与',
  '勤務時間・時間帯',
  '休日',
  '通勤距離・駅近',
  '就業日数',
  '職場環境',
  'その他',
]

function SelectPreferredPriority() {
  const [ priority, setPriority ] = useState('');
  const handleChangePriority = (event) => {
    
    setPriority(event.target.value);

  };
  console.log(priority);
  return (
    <>
      <FormControl sx={{ mr: 2, minWidth: 200 }} size="small">
        <Select 
          id="suggested_treatment_priority_2"
          value={priority}
          displayEmpty
          onChange={handleChangePriority}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>選択してください</em>;
            }
            return selected;
          }}
        >
          <MenuItem value="" disabled><em>選択してください</em></MenuItem>
          {priorityMenuItems.map((item) => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
        </Select>
      </FormControl>
      {priority === 'その他' ? <TextField label="その他理由" id="other" size="small" sx={{ width: '90%', mr: 5, mt:3 }} /> : ''}
    </>

  )
}

export default SelectPreferredPriority;