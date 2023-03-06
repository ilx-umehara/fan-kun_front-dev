/** @jsxImportSource @emotion/react */
import React from "react";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Const from '../../../libs/Const';

const itemLists = ['有', '無', 'わからない'];


const SelectedYesOrNo = () => {
  const [answer, setAnswer] = React.useState('');
  const handleChangeAnswer = (event) => {
    setAnswer(event.target.value);
  };
  
  return (
    <FormControl sx={{ mr: 2, minWidth: 120 }} size="small">

    <Select
      labelId="answer"
      id="answer"
      value={answer}
      onChange={handleChangeAnswer}
    >
      {itemLists.map((option) => {
          return (
            <MenuItem value={option}>{option}</MenuItem>
          )})
      }
    </Select>
  </FormControl>
  )
}

export default SelectedYesOrNo;