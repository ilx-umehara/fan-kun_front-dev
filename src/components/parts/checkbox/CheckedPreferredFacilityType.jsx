/** @jsxImportSource @emotion/react */
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const checkItems = [ '特養', '老健', '有料', 'サ高住', 'GH', 'デイ', 'ショート', '養護', '病院', '診療', '小多機', 'デイケア', '障がい', '軽費', '地域包括', '訪問介護', '訪問看護', 'ケア', '訪入浴', 'その他' ];

function CheckedPreferredFacilityType() {
  return (
    <div>
      {checkItems.map((item) => {
        return <FormControlLabel sx={{width: '120px', mr:4 }} control={<Checkbox />} label={item} />
      })}
    </div>
  )
}

export default CheckedPreferredFacilityType;