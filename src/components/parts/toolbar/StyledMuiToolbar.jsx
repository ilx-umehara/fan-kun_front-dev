import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";

const StyledMuiToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: '3.5rem',
  "@media (min-width: 600px)":{
    minHeight: '2.5rem',
  }
}));

export default StyledMuiToolbar;