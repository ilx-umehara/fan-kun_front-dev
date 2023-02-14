/** @jsxImportSource @emotion/react */
import React from "react";

function Footer() {
  return (
    <footer css={styles.footer}>
      <div>Copyright(c) NEO CARRER Corporation. All Rights Reserved</div>
    </footer>
  );
}

const styles = {
  footer:{
    backgroundColor: '#c6e0f7',
    height: '56px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '0.8rem',
    marginTop: '40px',
  }
}

export default Footer;