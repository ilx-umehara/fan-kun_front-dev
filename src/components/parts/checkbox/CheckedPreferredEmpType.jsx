/** @jsxImportSource @emotion/react */
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const simpleSearchItems = [ '派遣', '紹介(パート)', '紹介(正社員)', '紹介予定派遣', '不問' ];

function CheckedPreferredEmpType() {
  return (
    <div>
      {simpleSearchItems.map((item) => {
        return <FormControlLabel control={<Checkbox />} label={item} sx={{ mr:4 }}/>
      })}
    </div>
  )
}

export default CheckedPreferredEmpType;