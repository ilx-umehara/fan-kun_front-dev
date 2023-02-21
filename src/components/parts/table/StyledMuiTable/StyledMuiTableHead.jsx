import { styled } from '@mui/material/styles';
import TableHead from '@mui/material/TableHead';

const StyledMuiTableHead = styled(TableHead)(({ theme }) => ({
  width: '35%',
  display: 'table-cell',
  padding: '5px 16px',
  fontSize: '0.8rem',
  verticalAlign: 'baseline',
}));

export default StyledMuiTableHead;