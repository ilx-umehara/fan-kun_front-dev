/** @jsxImportSource @emotion/react */
import React from "react";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';


const columns = [
  { id: 'increment', label: 'No', maxWidth: 30 },
  { id: 'name', label: '名前', minWidth: 100 },
  { id: 'appli_id', label: '応募者ID', minWidth: 100 },
  { id: 'birthday', label: '生年月日',},
  { id: 'gender', label: '性別',},
  { id: 'appli_media', label: '応募媒体', },
  { id: 'prefecture', label: '都道府県',},
  { id: 'branch', label: '担当支店' },
  { id: 'tel1', label: '電話番号',},
  { id: 'mail_address1', label: 'メールアドレス',},
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
  ruby:{
    fontSize: '0.5rem',
  },
  fontSmall:{
    fontSize: '0.8rem',
  },
  link:{
    color: '#FFFFFF'
  }
}


//架空のデータを作成するためのコード

function createData(name_kana, name_kanji, appli_id, birthday, gender, appli_date, appli_media, branch, prefecture, tel1, tel2, mail_address1, mail_address2){
  return {name_kana, name_kanji, appli_id, birthday, gender, appli_media, appli_date, branch, prefecture, tel1, tel2, mail_address1, mail_address2};
};

const firstNameList = [
  { 'mei_kana' : 'ヒロト', 'mei_kanji' : '大翔', 'gender' : '男性' },
  { 'mei_kana' : 'タクミ', 'mei_kanji' : '拓海', 'gender' : '男性' },
  { 'mei_kana' : 'ヒナ', 'mei_kanji' : '陽菜', 'gender' : '女性' },
  { 'mei_kana' : 'ミウ', 'mei_kanji' : '美羽', 'gender' : '女性' },
  { 'mei_kana' : 'ユウト', 'mei_kanji' : '優斗', 'gender' : '男性' },
  { 'mei_kana' : 'ユウマ', 'mei_kanji' : '悠真', 'gender' : '男性' },
  { 'mei_kana' : 'ココア', 'mei_kanji' : '心愛', 'gender' : '女性' },
  { 'mei_kana' : 'ユナ', 'mei_kanji' : '結菜', 'gender' : '女性' },
  { 'mei_kana' : 'レン', 'mei_kanji' : '蓮', 'gender' : '男性' },
  { 'mei_kana' : 'カイト', 'mei_kanji' : '海斗', 'gender' : '男性' },
  { 'mei_kana' : 'リン', 'mei_kanji' : '凛', 'gender' : '男性' },
  { 'mei_kana' : 'ハヤテ', 'mei_kanji' : '颯太', 'gender' : '男性' },
  { 'mei_kana' : 'シオリ', 'mei_kanji' : '詩織', 'gender' : '女性' },
  { 'mei_kana' : 'カズハ', 'mei_kanji' : '一葉', 'gender' : '女性' },
  { 'mei_kana' : 'タイチ', 'mei_kanji' : '太一', 'gender' : '男性' },
  { 'mei_kana' : 'マオ', 'mei_kanji' : '真央', 'gender' : '女性' },
  { 'mei_kana' : 'ケイタ', 'mei_kanji' : '慶太', 'gender' : '男性' },
  { 'mei_kana' : 'ヒトミ', 'mei_kanji' : '瞳', 'gender' : '女性' },
  { 'mei_kana' : 'ユウ', 'mei_kanji' : '悠', 'gender' : '男性' },
  { 'mei_kana' : 'ケンタ', 'mei_kanji' : '健太', 'gender' : '男性' },
];

const lastNameList = [
  { 'sei_kana' : 'サトウ', 'sei_kanji' : '佐藤' },
  { 'sei_kana' : 'スズキ', 'sei_kanji' : '鈴木' },
  { 'sei_kana' : 'タカハシ', 'sei_kanji' : '高橋' },
  { 'sei_kana' : 'タナカ', 'sei_kanji' : '田中' },
  { 'sei_kana' : 'ワタナベ', 'sei_kanji' : '渡辺' },
  { 'sei_kana' : 'イトウ', 'sei_kanji' : '伊藤' },
  { 'sei_kana' : 'ヤマモト', 'sei_kanji' : '山本' },
  { 'sei_kana' : 'ナカムラ', 'sei_kanji' : '中村' },
  { 'sei_kana' : 'コバヤシ', 'sei_kanji' : '小林' },
  { 'sei_kana' : 'ヨシダ', 'sei_kanji' : '吉田' },
  { 'sei_kana' : 'ヤマダ', 'sei_kanji' : '山田' },
  { 'sei_kana' : 'ササキ', 'sei_kanji' : '佐々木' },
  { 'sei_kana' : 'ヤマグチ', 'sei_kanji' : '山口' },
  { 'sei_kana' : 'マツモト', 'sei_kanji' : '松本' },
  { 'sei_kana' : 'イノウエ', 'sei_kanji' : '井上' },
  { 'sei_kana' : 'キムラ', 'sei_kanji' : '木村' },
  { 'sei_kana' : 'ハヤシ', 'sei_kanji' : '林' },
  { 'sei_kana' : 'シミズ', 'sei_kanji' : '清水' },
  { 'sei_kana' : 'ヤマザキ', 'sei_kanji' : '山崎' },
];

function generateName() {
  const randomFirstIndex = Math.floor(Math.random() * firstNameList.length);
  const randomLastIndex = Math.floor(Math.random() * lastNameList.length);
  const applicant = [
    { 'name_kana' : lastNameList[randomLastIndex]['sei_kana'] + ' ' + firstNameList[randomFirstIndex]['mei_kana'] },
    { 'name_kanji' : lastNameList[randomLastIndex]['sei_kanji'] + ' ' + firstNameList[randomFirstIndex]['mei_kanji'] },
    { 'gender' : firstNameList[randomFirstIndex]['gender'] },
  ]
  return applicant;
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

const mediaList = ["バイトルドットコム","マッハバイト","Airワーク採用管理","マイナビバイト","アルバイトEX"];
const emailList = ["oubo@ilovex.co.jp", "fake-dummy@test.com"];
const branchList = ['池袋支店', '新宿支店', 'NC新宿支店'];

function getRandomYmd(fromYmd, toYmd){

  const d1 = new Date(fromYmd);
  const d2 = new Date(toYmd);

  const c = (d2 - d1) / 86400000;
  const x = Math.floor(Math.random() * (c+1));

  d1.setDate(d1.getDate() + x);

  //フォーマット整形
  const year = d1.getFullYear();
  const month = ("00" + (d1.getMonth()+1)).slice(-2);
  const day = ("00" + d1.getDate()).slice(-2);
  const hour = ("00" + d1.getHours()).slice(-2);
  const minute = ("00" + d1.getMinutes()).slice(-2);
  return year + "年" + month + "月" + day + "日" + hour + "時" + minute + "分";

}

const rows = [];
for (let i = 0; i < 1000; i++ ){
  const applicant = generateName();

  const name_kana = applicant[0].name_kana;
  const name_kanji = applicant[1].name_kanji;
  const appli_id =  String(Math.floor(Math.random() * 10000000000)).padStart(10, '0');
  const year = Math.floor(Math.random() * (2003 - 1960 + 1)) + 1960;
  const month = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
  const day = Math.floor(Math.random() * (28 - 1 + 1)) + 1;
  const birthday = year + "年" + month + "月" + day + "日";
  const gender = applicant[2].gender;
  const appli_media = mediaList[Math.floor(Math.random() * mediaList.length)];
  const appli_date = getRandomYmd('2010/01/01', '2020/12/31');
  const branch = branchList[Math.floor(Math.random() * branchList.length)];
  const prefecture = randomPrefecture();
  const tel1 = generatePhoneNumber();
  const tel2 = generatePhoneNumber();
  const mail_address1 = emailList[Math.floor(Math.random() * emailList.length)];
  const mail_address2 = emailList[Math.floor(Math.random() * emailList.length)];
  rows.push(createData(name_kana, name_kanji, appli_id, birthday, gender, appli_date, appli_media, prefecture, branch, tel1, tel2, mail_address1, mail_address2));
}



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
    
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{}}>
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
            .map((row, k) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  <TableCell>{k + 1 +  page * rowsPerPage}</TableCell>
                  <TableCell css={styles.data}>
                    <p css={styles.ruby}>{row.name_kana}</p>
                    <p>{row.name_kanji}</p>
                  </TableCell>
                  <TableCell css={styles.data}>{row.appli_id}</TableCell>
                  <TableCell css={styles.data}>{row.birthday}</TableCell>
                  <TableCell css={styles.data}>{row.gender}</TableCell>
                  <TableCell css={styles.data}>
                    <p css={styles.fontSmall}>{row.appli_date}</p>
                    <p>{row.appli_media}</p>
                  </TableCell>
                  <TableCell css={styles.data}>{row.prefecture}</TableCell>
                  <TableCell css={styles.data}>{row.branch}</TableCell>
                  <TableCell css={styles.data}>
                    <p>{row.tel1}</p>
                    <p>{row.tel2}</p>
                  </TableCell>
                  <TableCell css={styles.data}>
                    <p>{row.mail_address1}</p>
                    <p>{row.mail_address2}</p>
                  </TableCell>
                  <TableCell sx={{ textAlign: 'center' }}>
                    <Button variant="contained" size="small"><Link to={`/oubo_detail/` + row.appli_id} css={styles.link}>詳細</Link></Button>
                  </TableCell>
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
  );
}



export default ApplicantsList;