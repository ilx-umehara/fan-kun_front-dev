import Const from '../Const';
import PrefCity from './PrefCity';

function DummyAppliData() {
  //架空のデータを作成するためのコード

  function createData(name_kana, name_kanji, appli_id, birthday, age, gender, appli_date, appli_media, prefecture, branch, tel1, tel2, mail_address1, mail_address2){
    return {name_kana, name_kanji, appli_id, birthday, age, gender, appli_media, appli_date, prefecture, branch, tel1, tel2, mail_address1, mail_address2};
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
    const prefectures = PrefCity.PREF_CITY_OPTIONS;


    const numOfPrefectures = ('00' + Math.floor( Math.random() * 47 + 1)).slice(-2);

    const randomPref = prefectures[0][0][numOfPrefectures];
    const numOfCity = Math.floor( Math.random() * (randomPref["cities"].length) );


    const address = {
      prefecture: randomPref["name"],
      city: randomPref["cities"][numOfCity]["city"],
    }

    return address;

    // return prefectures[0][0][('00' + birthday.day).slice(-2)]
    // return prefectures[Math.floor(Math.random() * prefectures.length)];
  }

  const mediaList = Const.APPLI_MEDIA_OPTIONS;
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



  function getBirthdayAndAge(){
    let birthday = {
      year: Math.floor(Math.random() * (2003 - 1960 + 1)) + 1960,
      month: Math.floor(Math.random() * (12 - 1 + 1)) + 1,
      day: Math.floor(Math.random() * (28 - 1 + 1)) + 1,
    }

    //誕生日と今日の日付から年齢を計算する
    let today = new Date();
    let thisYearsBirthday = new Date(today.getFullYear(), birthday.month-1, birthday.day);
    let age = today.getFullYear() - birthday.year;

    if(today < thisYearsBirthday){
      //今年まだ誕生日が来ていない
      age--;
    }

    //月と日を0埋めする
    if(birthday.month < 10){
      birthday.month = ('00' + birthday.month).slice(-2);
    }
    if(birthday.day < 10){
      birthday.day = ('00' + birthday.day).slice(-2);
    }

    let birthdayAndAge = {
      date: birthday.year + "年" + birthday.month + "月" + birthday.day + "日",
      age: age + "歳",
    }
    return birthdayAndAge;
  }

  const rows = [];
  for (let i = 0; i < 1000; i++ ){
    const applicant = generateName();
    const address = randomPrefecture();

    const name_kana = applicant[0].name_kana;
    const name_kanji = applicant[1].name_kanji;
    const appli_id =  String(Math.floor(Math.random() * 10000000000)).padStart(10, '0');
    const birthdayAndAge = getBirthdayAndAge();
    const birthday = birthdayAndAge.date;
    const age = birthdayAndAge.age;
    const gender = applicant[2].gender;
    const appli_media = mediaList[Math.floor(Math.random() * mediaList.length)];
    const appli_date = getRandomYmd('2010/01/01', '2020/12/31');
    const prefecture = address.prefecture + address.city;
    const branch = branchList[Math.floor(Math.random() * branchList.length)];
    const tel1 = generatePhoneNumber();
    const tel2 = generatePhoneNumber();
    const mail_address1 = emailList[Math.floor(Math.random() * emailList.length)];
    const mail_address2 = emailList[Math.floor(Math.random() * emailList.length)];
    rows.push(createData(name_kana, name_kanji, appli_id, birthday, age, gender, appli_date, appli_media, prefecture, branch, tel1, tel2, mail_address1, mail_address2));
  }



  //架空のデータを作成するためのコードここまで
  return rows;
}

export default DummyAppliData;