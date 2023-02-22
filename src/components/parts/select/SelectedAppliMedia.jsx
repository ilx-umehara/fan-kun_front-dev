/** @jsxImportSource @emotion/react */
import React from "react";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Const from '../../../libs/Const';

const SelectedAppliMedia = () => {
  const [appliMedia, setAppliMedia] = React.useState('');
  const handleChangeAppliMedia = (event) => {
    setAppliMedia(event.target.value);
  };
  return (
    <FormControl sx={{ mr: 2, width: '240px' }} size="small">
      <InputLabel id="appliMedia">応募媒体</InputLabel>
      <Select
        labelId="appliMedia"
        id="appliMedia"
        value={appliMedia}
        label="応募媒体"
        onChange={handleChangeAppliMedia}
      >
        {Const.APPLI_MEDIA_OPTIONS.map((option) => {
          return (
            <MenuItem value={option}>{option}</MenuItem>
          )})
        }
      </Select>
    </FormControl>
  )
}

export default SelectedAppliMedia;