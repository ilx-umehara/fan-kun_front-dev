import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

const StyledStickyCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {

  },
  [`&.${tableCellClasses.body}`]: {

  },

}));

export default StyledStickyCell;