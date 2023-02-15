/** @jsxImportSource @emotion/react */
import React from "react";
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';

import StyledMuiTabs from '../../parts/tab/StyledMuiTabs';
import StyledMuiTableCell from '../../parts/table/StyledMuiTable/StyledMuiTableCell';
import StyledMuiTableHead from '../../parts/table/StyledMuiTable/StyledMuiTableHead';
import StyledMuiTableRow from '../../parts/table/StyledMuiTable/StyledMuiTableRow';
import StyledMuiPaper from '../../parts/surface//StyledMuiPaper';

const tableDataListsBasicInfo = [
  { 'thead': '姓(漢字)', 'tdata': '応募' },
  { 'thead': '名(漢字)', 'tdata': '花子' },
  { 'thead': 'セイ(カナ)', 'tdata': 'オウボ' },
  { 'thead': 'メイ(カナ)', 'tdata': 'ハナコ' },
  { 'thead': '性別','tdata': '女性' },  
  { 'thead': '生年月日', 'tdata': '2000年01月01日' },
  { 'thead': '住所(郵便番号)', 'tdata': '103-0013' },
  { 'thead': '住所(都道府県)','tdata': '東京都' },
  { 'thead': '住所(市区町村)','tdata': '中央区日本橋人形町' },
  { 'thead': '住所(町域・番地)','tdata': '3-3-13' },
  { 'thead': '住所(建物等)', 'tdata': '人形町フォレストビル2F' },
  { 'thead': '最寄り駅①(沿線)', 'tdata': '東京メトロ日比谷線' },
  { 'thead': '最寄り駅①(駅名)', 'tdata': '人形町駅' },
  { 'thead': '最寄り駅からの交通手段①', 'tdata': '徒歩' },
  { 'thead': '最寄り駅からの所要時間①', 'tdata': '5分' },
  { 'thead': '最寄り駅②(沿線)', 'tdata': '東京メトロ半蔵門線' },
  { 'thead': '最寄り駅②(駅名)', 'tdata': '水天宮前駅' },
  { 'thead': '電話番号(携帯)', 'tdata': '090-3333-3333' },
  { 'thead': '電話番号(その他連絡先)', 'tdata': '03-3333-3333' },
  { 'thead': 'メールアドレス1', 'tdata': 'oubo@ilovex.co.jp' },
  { 'thead': 'メールアドレス2', 'tdata': 'dammy-test-fake@docomo.co.jp' },
  { 'thead': 'メールアドレス1種別', 'tdata': 'PC' },
  { 'thead': 'メールアドレス2種別', 'tdata': '携帯' },
  { 'thead': '在留カード情報', 'tdata': '在留資格区分' },
];

const tableDataListsNC2 = [
  { 'thead': '希望の雇用形態', 'tdata': '派遣 / 正社員' },
  { 'thead': '案内を控えてほしい施設・病院', 'tdata': '応募病院 / 応募ステーション' },
  { 'thead': '就業開始可能日', 'tdata': '2023年04月01日' },
  { 'thead': '希望勤務可能日', 'tdata': '月・火・水・木・金・土' },
  { 'thead': '希望勤務日数','tdata': '週5日' },
  { 'thead': '希望勤務時間', 'tdata': '早番・日勤・遅番・夜勤' },
  { 'thead': '具体的希望時間', 'tdata': '09:00～17:00 / 17:00～25:00' },
  { 'thead': '残業可否','tdata': '場合により可(26時まで可能)' },
  { 'thead': '希望条件','tdata': '1,600円～' },
  { 'thead': '介護職・看護助手の経験年数','tdata': '1年' },
  { 'thead': '希望施設形態', 'tdata': '特養 / 老健 / サ高住 / GH / デイ / 訪問介護' },
  { 'thead': '介護職を選ばれた理由', 'tdata': '・自らの力で支えられる幸せを感じる\n・毎日実感できる役割の拡大\n・介護を通して役立った人々に喜びを与えられる' },
  { 'thead': '仕事探しをしている理由', 'tdata': '・家族に何かを貢献する理由\n・自身のスキルを生かすため\n・将来性のある職業を求める' },
  { 'thead': '希望交通手段', 'tdata': '公共交通機関 / 自転車 / 徒歩' },
  { 'thead': 'その他希望事項', 'tdata': '' },
  { 'thead': '三大介助の抵抗有無(説明書きが必要)', 'tdata': 'わからない' },
  { 'thead': 'レクリエーションの対応可否(説明書きが必要)', 'tdata': '可' },
  { 'thead': '調理補助の対応可否(説明書きが必要)', 'tdata': 'メニューが決まっており、材料もそろっている状態での調理であれば対応可能' },
  { 'thead': '送迎業務の対応可否(説明書きが必要)', 'tdata': '送迎で使用することが多いバンタイプのお車も対応可能' },
  { 'thead': '希望条件の優先順位(1位)', 'tdata': '通勤距離・駅近' },
  { 'thead': '希望条件の優先順位(2位)', 'tdata': '就業日数' },
  { 'thead': '希望条件の優先順位(3位)', 'tdata': '働き方や方針に柔軟性を持った環境' },
  { 'thead': '電話の繋がりやすい時間', 'tdata': '12:00～13:00\n18:00～21:00' },
];

const tableDataListsOS2 = [
  { 'thead': '希望の雇用形態', 'tdata': '直接雇用(正社員)' },
  { 'thead': '希望勤務時間', 'tdata': '長期(6ヵ月以上)' },
  { 'thead': 'NG職種', 'tdata': '早番・日勤・遅番・夜勤' },
  { 'thead': '希望条件','tdata': '' },
  { 'thead': '【希望職種】事務職','tdata': '一般事務 / 営業事務 / 貿易・国際事務 / 特許事務英文事務 / 通訳・翻訳 / 金融事務（銀行・証券）金融事務（生保・損保）経理事務・財経・会計 / 総務・人事広報・宣伝 / 秘書 / 受付 / データ入力 / 企画・マーケティング事務的軽作業（封入など）/ 労務（保険手続き・給与計算） / 旅行事務 / 医療事務 / 学校事務' },
  { 'thead': '【希望職種】事務職','tdata': 'テレマーケティング（アウト） / テレマーケティング（イン） / テレマーケティング（SV） / テレマーケティング（保険） / テレマーケティング（証券） / カスタマーサポート（受電1次・受電2次） / カスタマーサポート（メール対応） / ヘルプデスク' },
  { 'thead': '【希望職種】事務職','tdata': '販売（アパレル・コスメ） / 携帯販売（docomo） / 携帯販売（au） / 携帯販売（softbonk） / 携帯販売（その他キャリア） / 販売（家電・PCなど） / 販売（食品） / 接客（ショールーム・カウンター） / フード・飲食（接客） / 営業（企画営業） / 営業（ルート営業） / 製造・物流作業 / 軽作業 / CADオペレーター / CAD設計 / システムエンジニア / プログラマー / テスト・評価 / キッティング / Webデザイナー / Webディレクター / Web制作・編集 / 編集・制作・校正 / DTPオペレーター / その他' },
  { 'thead': '就業開始可能日', 'tdata': '2023年04月01日' },
  { 'thead': '希望勤務可能日', 'tdata': '月・火・水・木・金・土' },
  { 'thead': '希望勤務日数','tdata': '週5日' },
  { 'thead': '希望勤務形態', 'tdata': 'フルタイム(時間固定・平日)' },
  { 'thead': '希望勤務時間', 'tdata': '' },
  { 'thead': '残業可否','tdata': '場合により可(26時まで可能)' },
  { 'thead': '夜勤可否','tdata': '場合により可(26時まで可能)' },
  { 'thead': '希望条件','tdata': '時給：' },
  { 'thead': '','tdata': '月給：' },
  { 'thead': '','tdata': '勤務地：' },
];

const tabHeaderNc = [ '基本情報', '希望条件' ];
const tabHeaderOs = [ '基本情報', '希望条件', 'OAスキル', '経験職種', '資格', '職歴/最終学歴', '社内用', '緊急連絡先', '給与口座', '社保・雇用', '在留カード' ];

const tabPanelListsNc = [ tableDataListsBasicInfo, tableDataListsNC2 ];
const tabPanelListsOs = [ tableDataListsBasicInfo, tableDataListsOS2 ];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pt: 3, pr: 3, pb: 1, pl: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const division = 'OS';

function ApplicantsEntryInfo() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  if(division === 'NC'){
    return (
      <StyledMuiPaper sx={{ height: '73.33333333333333vh' }}>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <StyledMuiTabs value={value} onChange={handleChange} aria-label="basic tabs example" TabIndicatorProps={{ style: { display: 'none' } }}>
              {tabHeaderNc.map((head, i) => {
                return <Tab label={head} {...a11yProps({i})} sx={{ maxWidth: 'initial', minWidth: 'initial', width: '50%' }}/>
              })}
            </StyledMuiTabs>
          </Box>
          {tabPanelListsNc.map((panel, k) => {
            return (
            <TabPanel value={value} index={k}>
              <div css={styles.titleAndEditBtn}>
                <p className="contentBlockTitle">エントリー情報</p>
                <Button onClick={handleOpen} variant="contained">編集</Button>
              </div>
              <TableContainer component={Paper} sx={{ my:3, height: '47.22222222222222vh' }}>
                <Table sx={{ minWidth: 250 }} aria-label="simple table">
                {panel.map((item) => {
                  return (
                    <StyledMuiTableRow>
                      <StyledMuiTableHead align="left">{item.thead}</StyledMuiTableHead>
                      <StyledMuiTableCell>{item.tdata}</StyledMuiTableCell>
                    </StyledMuiTableRow>
                  );
                })}
                </Table>
              </TableContainer>
            </TabPanel>
            )
          })}
          <Button onClick={handleOpen} variant="contained" sx={{mb:4}}>修正依頼の送信</Button>
        </Box>
      </StyledMuiPaper>
    );
  }else if(division === 'OS') {
    return (
      <StyledMuiPaper sx={{ minHeight: '73.33333333333333vh' }}>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider', flexWrap: 'wrap' }}>
            <StyledMuiTabs value={value} onChange={handleChange} aria-label="basic tabs example" TabIndicatorProps={{ style: { display: 'none' } }}>
              {tabHeaderOs.map((head, i) => {
                return <Tab label={head} {...a11yProps({i})} sx={{ maxWidth: 'initial', minWidth: 'initial', width: '16.66%' }}/>
              })}
            </StyledMuiTabs>
          </Box>
          {tabPanelListsOs.map((panel, j) => {
            return (
              <TabPanel value={value} index={j}>
                <div css={styles.titleAndEditBtn}>
                  <p className="contentBlockTitle">エントリー情報</p>
                  <Button onClick={handleOpen} variant="contained">編集</Button>
                </div>
                <TableContainer component={Paper} sx={{ mt:3, height: '47vh' }}>
                  <Table sx={{ minWidth: 250 }} aria-label="simple table">
                  {panel.map((item) => {
                    return (
                      <StyledMuiTableRow>
                        <StyledMuiTableHead align="left">{item.thead}</StyledMuiTableHead>
                        <StyledMuiTableCell>{item.tdata}</StyledMuiTableCell>
                      </StyledMuiTableRow>
                    );
                  })}
                  </Table>
                </TableContainer>
              </TabPanel>
            )
          })}
          
        </Box>
        <Button onClick={handleOpen} variant="contained" sx={{mt: 1}}>修正依頼の送信</Button>
      </StyledMuiPaper>
    );
  }
}




const styles = {
  titleAndEditBtn:{
    display: 'flex',
    justifyContent: 'space-between',
  },
  btnArea:{
    background: 'red',
    padding: '1% 0',
  }
}

export default ApplicantsEntryInfo;