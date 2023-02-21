import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

const StyledMuiTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    
  },
  [`&.${tableCellClasses.body}`]: {
    borderBottom: 'initial',
  },
  padding: '5px 16px',
  borderBottom: 'initial',
  color: '#0047A4',
  verticalAlign: 'baseline',
  fontWeight: 'bold',
}));

export default StyledMuiTableCell;