/** @jsxImportSource @emotion/react */
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const simpleSearchItems = [ '月', '火', '水', '木', '金', '土', '日', ];

function CheckedWeekday() {
  return (
    <div>
      {simpleSearchItems.map((item) => {
        return <FormControlLabel control={<Checkbox />} label={item} sx={{ mr:4 }}/>
      })}
    </div>
  )
}

export default CheckedWeekday;