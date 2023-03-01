/** @jsxImportSource @emotion/react */
import TextField from '@mui/material/TextField';

const CustomDatePicker = () => {
  return (
    <>
      <TextField label="From" id="date_from" size="small" sx={{ width: '160px' }} />
      <span>&emsp;～&emsp;</span>
      <TextField label="To" id="date_to" size="small" sx={{ width: '160px' }} />
    </>
  )
}

export default CustomDatePicker;