/** @jsxImportSource @emotion/react */
import React from "react";
import { useTheme } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import PrefCity from '../../../libs/Const/PrefCity';


const prefIndex = {
  0: "01",
  1: "02",
  2: "03",
  3: "04",
  4: "05",
  5: "06",
  6: "07",
  7: "08",
  8: "09",
  9: "10",
  10: "11",
  11: "12",
  12: "13",
  13: "14",
  14: "15",
  15: "16",
  16: "17",
  17: "18",
  18: "19",
  19: "20",
  20: "21",
  21: "22",
  22: "23",
  23: "24",
  24: "25",
  25: "26",
  26: "27",
  27: "28",
  28: "29",
  29: "30",
  30: "31",
  31: "32",
  32: "33",
  33: "34",
  34: "35",
  35: "36",
  36: "37",
  37: "38",
  38: "39",
  39: "40",
  40: "41",
  41: "42",
  42: "43",
  43: "44",
  44: "45",
  45: "46",
  46: "47",
}


function createPrefAndCity(prefecture, cities){
  return {prefecture, cities};
};

const prefDatas = PrefCity.PREF_CITY_OPTIONS;
const prefAndCitiesLists = [];

for(let i = 0; i < 47; i++){
  prefAndCitiesLists.push( createPrefAndCity(prefDatas[0][0][prefIndex[i]]["name"], prefDatas[0][0][prefIndex[i]]["cities"] ));
}

console.log(prefAndCitiesLists);


const MenuProps = {
  PaperProps: {
    style: {
      width: 250,
    },
  },
};

function getStyles(city, selectedCity, theme) {
  return {
    fontWeight:
    selectedCity.indexOf(city) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}







export default function SelectedPrefecture() {
  const theme = useTheme();
  const [selectedPref, setSelectedPref] = React.useState('');
  const handleChangeSelectedPref = (event) => {
    setSelectedPref(event.target.value);
    // setCity();
  };

  const [selectedCity, setSelectedCity] = React.useState([]);

  const handleChangeSelectedCity = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedCity(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };


  const prefOptions = prefAndCitiesLists.map((pref, i) => (
    <MenuItem key={i} value={pref.prefecture}>{pref.prefecture}</MenuItem>
  ));
  const cityOptions = selectedPref
  ? prefAndCitiesLists.find((pref) => pref.prefecture === selectedPref).cities.map((city, j) => (
      <MenuItem key={j} value={city.city} style={getStyles(city, selectedCity, theme)}>{city.city}</MenuItem>
    ))
  : null;

  //選択したprefからcitiesの配列を新たに作成してmapで取り出す？？(2023.02.28 12:00)



  return (
    <>
    <div >
      <FormControl sx={{ mr: 2, minWidth: 240 }} size="small">
        <InputLabel id="prefecture">都道府県</InputLabel>
        <Select
          labelId="prefecture"
          id="prefecture"
          value={selectedPref}
          label="都道府県"
          onChange={handleChangeSelectedPref}
        >
          {prefOptions}
        </Select>
      </FormControl>
      <FormControl sx={{ mr: 2, width: 360 }} size="small">
        <InputLabel id="cities">市区町村</InputLabel>
        <Select
          labelId="cities"
          id="cities"
          multiple
          value={selectedCity}
          onChange={handleChangeSelectedCity}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {cityOptions === null ? <MenuItem value="hidden">都道府県を選択してください</MenuItem> : cityOptions}
        </Select>
      </FormControl>
    </div>
    </>
  );
}