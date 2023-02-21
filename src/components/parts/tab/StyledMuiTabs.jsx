import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';

const StyledMuiTabs = styled(Tabs)(({ theme }) => ({
  '& .MuiTabs-flexContainer': {
    flexWrap: 'wrap'
  },
  '& .Mui-selected': {
    background: '#0047A4',
    color: '#FFFFFF !important',
    borderRadius: '0.25rem',
    fontWeight: 'bold'
  },

}));

export default StyledMuiTabs;