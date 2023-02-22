/** @jsxImportSource @emotion/react */
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const simpleSearchItems = [ '未対応(依頼前)', '提示依頼済み', '提示・確認済み' ];

const CheckedProgressStatus = () => {
  return (
    <div>
      {simpleSearchItems.map((item) => {
        return <FormControlLabel control={<Checkbox />} label={item} sx={{ mr:4 }}/>
      })}
    </div>
  )
}

export default CheckedProgressStatus;