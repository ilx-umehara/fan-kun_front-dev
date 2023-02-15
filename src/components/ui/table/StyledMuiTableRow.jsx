import { styled } from '@mui/material/styles';
import TableRow from '@mui/material/TableRow';

const StyledMuiTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
    color: '#555555',
  },
  '&:nth-of-type(even)': {
    color: '#555555',
  },
}));

export default StyledMuiTableRow;