
function DummyEntryDataNc(){
  
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

  const tabPanelListsNc = [ tableDataListsBasicInfo, tableDataListsNC2 ];
  return tabPanelListsNc;
}

export default DummyEntryDataNc;