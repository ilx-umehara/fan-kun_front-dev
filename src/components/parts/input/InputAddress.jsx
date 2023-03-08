/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';

import SelectedPrefecture from '../../parts/select/SelectedPrefecture';

const InputAddress = () => {
  const { register, setValue, watch } = useForm();
  const [prefecture, setPrefecture] = useState('');
  const [city, setCity] = useState('');

  useEffect(() => {
    const zipCode = watch('zipCode');

    if (zipCode && zipCode.length === 7) {
      fetch(`https://apis.postcode-jp.com/api/v3/postcodes?apikey=API_KEY&postcode=${zipCode}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.status === 200) {
            setPrefecture(data.data[0].pref);
            setCity(data.data[0].city);
          }
        });
    }
  }, [watch]);

  return (

    <>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <div css={styles.inputItem}>
          <div css={styles.inputItemHeader}>住所(郵便番号)</div>
          <div className="requiredTag">必須</div>
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} css={styles.inputItemForm} sx={{ mb: 2 }}>
        <TextField {...register('zipCode')} id="postcode" size="small" sx={{ width: '70px', mr: 1 }}/>
        <span>&nbsp;―&nbsp;</span>
        <TextField {...register('zipCode')} id="postcode" size="small" sx={{ width: '90px', mx: 1 }}/>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <div css={styles.inputItem}>
          <div css={styles.inputItemHeader}>住所(都道府県)</div>
          <div className="requiredTag">必須</div>
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} css={styles.inputItemForm} sx={{ mb: 2 }}>
        <SelectedPrefecture id="prefecture" size="small" sx={{ width: '160px', mr: 1 }} value={prefecture} onChange={(e) => setPrefecture(e.target.value)}/>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <div css={styles.inputItem}>
          <div css={styles.inputItemHeader}>住所(市区町村)</div>
          <div className="requiredTag">必須</div>
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} css={styles.inputItemForm} sx={{ mb: 2 }}>
        <TextField label="市区町村" id="city" size="small" sx={{ width: '300px', mr: 1 }} value={city} onChange={(e) => setCity(e.target.value)}/>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <div css={styles.inputItem}>
          <div css={styles.inputItemHeader}>住所(町域・番地)</div>
          <div className="requiredTag">必須</div>
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} css={styles.inputItemForm} sx={{ mb: 2 }}>
        <TextField label="町域・番地" id="city" size="small" sx={{ width: '300px', mr: 1 }} value={city} onChange={(e) => setCity(e.target.value)}/>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <div css={styles.inputItem}>
          <div css={styles.inputItemHeader}>住所(建物名など)</div>
          <div className="optionalTag">任意</div>
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} css={styles.inputItemForm} sx={{ mb: 2 }}>
        <TextField label="建物名など" id="city" size="small" sx={{ width: '600px', mr: 1 }} value={city} onChange={(e) => setCity(e.target.value)}/>
      </Grid>
    </>
  );
};
const styles = {
  responsiveStyle:{
    width: '100%',
    paddingLeft: '1rem',
    "@media (min-width:700px)":{
      width: '60%',
      paddingLeft: '5rem',
    },
    overflow: 'hidden',
    textAlign: 'left',
    marginTop: '3rem',
  },
  inputItem:{
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    "@media (min-width:700px)":{
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
  },
  inputItemHeader:{
    fontWeight: 'bold',
    fontSize: '1rem',
    textAlign: 'left',
  },
  inputItemForm:{
    display:'flex',
    alignItems: 'center',
  },
}

export default InputAddress;
