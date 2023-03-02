/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';


function getUserAge( birthdayYear, birthdayMonth, birthdayDay ) {
  //誕生日を一旦 Date クラスに変換する
  console.log( birthdayYear, birthdayMonth, birthdayDay );
  let birthdayDate = new Date(birthdayYear, birthdayMonth - 1, birthdayDay);
  console.log(birthdayDate);
  //Date クラスは不正の値で初期化したとき、初期化に利用した数値と同じ数値にならないので、そこで正しい数値であるかを判定する
  // if( birthdayYear !== birthdayDate.getFullYear() ||
  //     (birthdayMonth - 1) !== birthdayDate.getMonth() ||
  //     birthdayDay !== birthdayDate.getDate() ) {
  //   return null;
  // }
 
  //今日の日付けを取得する
  let todayDate = new Date();
 
  //誕生日を計算する
  let userAge = todayDate.getFullYear() - birthdayDate.getFullYear();
 
  //誕生日が当年込みの計算のため、もし今年の誕生日を迎えていない場合は1歳年齢を減らす
  let currentYearDate = new Date(todayDate.getFullYear(), birthdayDate.getMonth(), birthdayDate.getDate());
  if(currentYearDate > todayDate) {
    userAge = ( userAge - 1 );
  }
  console.log(userAge);
  return userAge;
}
function InputBirthdayAndAge() {
  const [birthdayYear, setBirthdayYear] = useState('');
  const [birthdayMonth, setBirthdayMonth] = useState('');
  const [birthdayDay, setBirthdayDay] = useState('');
  const handleChangeBirthdayYear = (event) => {
    setBirthdayYear(event.target.value);
    if(
      (birthdayYear !== null && birthdayYear > 1920 && birthdayYear < new Date().getFullYear)
      && (birthdayMonth !== null && birthdayMonth > 0 && birthdayMonth < 13)
      && (birthdayDay !== null && birthdayDay > 0 && birthdayDay < 32)
      ){
        setAge(getUserAge( birthdayYear, birthdayMonth, birthdayDay ));
    }
  };
  const handleChangeBirthdayMonth = (event) => {
    setBirthdayMonth(event.target.value);
    if(
      (birthdayYear !== null && birthdayYear > 1920 && birthdayYear < new Date().getFullYear)
      && (birthdayMonth !== null && birthdayMonth > 0 && birthdayMonth < 13)
      && (birthdayDay !== null && birthdayDay > 0 && birthdayDay < 32)
      ){
        setAge(getUserAge( birthdayYear, birthdayMonth, birthdayDay ));
    }
  };
  const handleChangeBirthdayDay = (event) => {
    setBirthdayDay(event.target.value);
    if(
      (birthdayYear !== null && birthdayYear > 1920 && birthdayYear < new Date().getFullYear)
      && (birthdayMonth !== null && birthdayMonth > 0 && birthdayMonth < 13)
      && (birthdayDay !== null && birthdayDay > 0 && birthdayDay < 32)
      ){
        setAge(getUserAge( birthdayYear, birthdayMonth, birthdayDay ));
    }
  };

  const [age, setAge] = useState('');
  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <div css={styles.inputItem}>
          <div css={styles.inputItemHeader}>生年月日</div>
          <div css={styles.inputItemForm}>
            <TextField id="birthday_y" size="small" sx={{ width: '120px', mr: 1 }} value={birthdayYear} onChange={handleChangeBirthdayYear}/>
            <span>年</span>
            <TextField id="birthday_m" size="small" sx={{ width: '60px', ml: 5, mr: 1 }} value={birthdayMonth} onChange={handleChangeBirthdayMonth}/>
            <span>月</span>
            <TextField id="birthday_d" size="small" sx={{ width: '60px', ml: 5, mr: 1 }} value={birthdayDay} onChange={handleChangeBirthdayDay}/>
            <span>日</span>
          </div>
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <div css={styles.inputItem}>
          <div css={styles.inputItemHeader}>年齢</div>
          <div css={styles.inputItemForm}>
            <TextField id="age" size="small" sx={{ width: '60px', mr: 1 }} value={age} onChange={handleChangeAge}/>
            <span>歳</span>
          </div>
        </div>
      </Grid>
    </>
  )
}
const styles = {
  inputItem:{
    width: '100%',
    marginBottom: '20px',
  },
  inputItemHeader:{
    fontWeight: 'bold',
    fontSize: '1.1rem',
    width: '200px',
    marginRight: '30px',
    marginBottom: '10px',
    textAlign: 'left',
  },
  inputItemForm:{
    display:'flex',
    alignItems: 'center',
  }
}
export default InputBirthdayAndAge;