import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const StyledMuiPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  color: '#0047a4',
  padding: theme.spacing(1),
  textAlign: 'center',
  borderRadius: "0.25rem",
}));

export default StyledMuiPaper;