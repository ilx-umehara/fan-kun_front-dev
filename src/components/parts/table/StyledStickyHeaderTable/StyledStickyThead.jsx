import { styled } from '@mui/material/styles';
import TableHead from '@mui/material/TableHead';

const StyledStickyThead = styled(TableHead)(({ theme }) => ({
  position: 'fixed',
  top: '64px',
  background: '#FFFFFF',
  zIndex: '2000',



}));

export default StyledStickyThead;