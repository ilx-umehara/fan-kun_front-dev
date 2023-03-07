import { React, useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import LinearProgress from '@mui/material/Tabs';

// Bar Styled Component
const Bar = styled(LinearProgress)(({ theme }) => ({
  position: 'fixed',
  minHeight: 'initial',
  height: '6px',
  borderRadius: '0px 2px 0px 0px',
  background: '#0047A4',
}));


function ReadingBar() {
  //Width State
  const [width, setWidth] = useState(0);

  // scroll function
  const scrollHeight = () => {
    var el = document.documentElement,
      ScrollTop = el.scrollTop || document.body.scrollTop,
      ScrollHeight = el.scrollHeight || document.body.scrollHeight;
    var percent = (ScrollTop / (ScrollHeight - el.clientHeight)) * 100;
    // store percentage in state
    setWidth(percent);
  };

  //useEffect to control the component lifecycle
  useEffect(() => {
    window.addEventListener("scroll", scrollHeight);
    return () => window.removeEventListener("scroll", scrollHeight);
  });
  return <Bar style={{ width: width + "%" }}></Bar>;
}

export default ReadingBar;
