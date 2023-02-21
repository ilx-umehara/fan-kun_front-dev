/** @jsxImportSource @emotion/react */
import React from "react";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';


const columns = [
  { id: 'appli_id', label: '応募者ID', minWidth: 100 },
  { id: 'name', label: '名前', minWidth: 100 },
  { id: 'birthday', label: '生年月日',},
  { id: 'gender', label: '性別',},
  { id: 'media', label: '応募媒体', },
  { id: 'prefecture', label: '都道府県',},
  { id: 'tel', label: '電話番号',},
  { id: 'mail_address', label: 'メールアドレス',},
  { id: 'current_work', label: '現在の職業',},
  { id: 'identification', label: '本人確認書類', },
  { id: 'web_reserve', label: 'ネット予約',},
  { id: 'web_entry', label: 'Webエントリー',},
  { id: 'detail', label: '詳細',},
];

const styles = {
  header:{
    fontWeight: 'bold',
    color: '#0047a4',
    textAlign: 'center',
  },
  data:{
    color: '#0047a4',
  },
  link:{
    color: '#FFFFFF'
  }
}


//架空のデータを作成するためのコード


function createData(appli_id, name, birthday, gender, media, prefecture, tel, mail_address, current_work, identification, web_reserve, web_entry, detail) {
  return { appli_id, name, birthday, gender, media, prefecture, tel, mail_address, current_work, identification, web_reserve, web_entry, detail };
}

function generateName() {
  const firstName = ['大翔', '拓海', '陽菜', '美羽', '優斗', '悠真', '心愛', '結菜', '蓮', '海斗', '凛', '颯太', '詩織', '一葉', '太一', '真央', '慶太', '瞳', '悠', '健太'];
  const lastName = ['佐藤', '鈴木', '高橋', '田中', '渡辺', '伊藤', '山本', '中村', '小林', '加藤', '吉田', '山田', '佐々木', '山口', '松本', '井上', '木村', '林', '清水', '山崎'];
  const randomFirstIndex = Math.floor(Math.random() * firstName.length);
  const randomLastIndex = Math.floor(Math.random() * lastName.length);
  return lastName[randomLastIndex] + ' ' + firstName[randomFirstIndex];
}

function generatePhoneNumber() {
  const areaCodes = ['080', '090', '050', '070'];
  const firstPart = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  const secondPart = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  const areaCode = areaCodes[Math.floor(Math.random() * areaCodes.length)];
  return `${areaCode}-${firstPart}-${secondPart}`;
}

function randomPrefecture() {
  const prefectures = ['北海道', '青森県', '岩手県', '宮城県', '秋田県', '山形県', '福島県', '茨城県', '栃木県', '群馬県', '埼玉県', '千葉県', '東京都', '神奈川県', '新潟県', '富山県', '石川県', '福井県', '山梨県', '長野県', '岐阜県', '静岡県', '愛知県', '三重県', '滋賀県', '京都府', '大阪府', '兵庫県', '奈良県', '和歌山県', '鳥取県', '島根県', '岡山県', '広島県', '山口県', '徳島県', '香川県', '愛媛県', '高知県', '福岡県', '佐賀県', '長崎県', '熊本県', '大分県', '宮崎県', '鹿児島県', '沖縄県'];
  return prefectures[Math.floor(Math.random() * prefectures.length)];
}

function randomCurrentWork(){
  const currentWork = ["会社員","フリーター","主婦","学生","無職"];
  return currentWork[Math.floor(Math.random() * currentWork.length)];
}

function selectGender(name){
  
  if(name.includes('大翔') || name.includes('拓海') || name.includes('優斗') || name.includes('悠真') || name.includes('蓮' )|| name.includes('海斗') || name.includes('颯太') || name.includes('太一') || name.includes('慶太') || name.includes('健太')){
    return '男性';
  }else{
    return '女性';
  }
}


const mediaList = ["バイトルドットコム","マッハバイト","Airワーク採用管理","マイナビバイト","アルバイトEX"];
const emailList = ["oubo@ilovex.co.jp", "fake-dummy@test.com"];
const rows = [];


for (let i = 0; i < 1000; i++) {
  const appli_id = String(Math.floor(Math.random() * 10000000000)).padStart(10, '0');
  const name = generateName();
  const year = Math.floor(Math.random() * (2003 - 1960 + 1)) + 1960;
  const month = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
  const day = Math.floor(Math.random() * (28 - 1 + 1)) + 1;
  const birthday = year + "年" + month + "月" + day + "日";
  const gender = selectGender(name);
  const media = mediaList[Math.floor(Math.random() * mediaList.length)];
  const prefecture = randomPrefecture();
  const tel = generatePhoneNumber();
  const mail_address = emailList[Math.floor(Math.random() * emailList.length)];
  const current_work = randomCurrentWork();
  const identification = "未対応";
  const web_reserve = "未対応";
  const web_entry = "未対応";
  const detail = <Button variant="contained" size="small"><Link to={`/oubo_detail/` + appli_id} css={styles.link}>詳細</Link></Button>;
  rows.push(createData(appli_id, name, birthday, gender, media, prefecture, tel, mail_address, current_work, identification, web_reserve, web_entry, detail));
}

console.log(rows);

//架空のデータを作成するためのコードここまで

const ApplicantsList = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(50);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container spacing={2} rowSpacing={2} sx={{px:10}}>
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <TableContainer sx={{maxHeight: '75vh'}}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                      css={ styles.header }
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align} css={styles.data}>
                              {column.format && typeof value === 'number'
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[50, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Grid>
    </Box>
  );
}



export default ApplicantsList;