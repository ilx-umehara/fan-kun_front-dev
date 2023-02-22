/** @jsxImportSource @emotion/react */
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const simpleSearchItems = [ '来場', 'Web', '電話' ];

const CheckidInterviewMethod = () => {
  return (
    <div>
      {simpleSearchItems.map((item) => {
        return <FormControlLabel control={<Checkbox />} label={item} sx={{ mr:4 }}/>
      })}
    </div>
  )
}

export default CheckidInterviewMethod;