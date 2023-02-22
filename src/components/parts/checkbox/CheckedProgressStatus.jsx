/** @jsxImportSource @emotion/react */
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const simpleSearchItems = [ '未対応', '呼び込み中', '登録完了', 'その他(対面など)', '登録辞退', '対象外' ];

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