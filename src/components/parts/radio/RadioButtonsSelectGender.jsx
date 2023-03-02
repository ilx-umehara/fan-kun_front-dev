/** @jsxImportSource @emotion/react */
import React from "react";
import { styled } from '@mui/material/styles';
import Grid from "@mui/material/Grid";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function RowRadioButtonsGroup() {
  return (
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
      <div css={styles.inputItem}>
        <div css={styles.inputItemHeader}>性別</div>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="male" control={<Radio />} label="男性" />
            <FormControlLabel value="female" control={<Radio />} label="女性" />
            <FormControlLabel value="other" control={<Radio />} label="その他" />
          </RadioGroup>
        </FormControl>
      </div>
    </Grid>
  );
}

const styles = {
  inputItem:{
    width: '100%',
    marginBottom: '20px',
  },
  inputItemHeader:{
    fontWeight: 'bold',
    fontSize: '1.1rem',

    marginRight: '30px',
    marginBottom: '10px',
    textAlign: 'left',
  },
}

export default RowRadioButtonsGroup;