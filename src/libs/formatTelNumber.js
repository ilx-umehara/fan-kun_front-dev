import { PhoneNumberUtil, PhoneNumberFormat } from 'google-libphonenumber';

export default function formatTelNumber(inputNumber) {

    // 日本の国コード
    const region = 'JP';

    const util = PhoneNumberUtil.getInstance();

    // 番号と地域を設定
    const number = util.parseAndKeepRawInput(inputNumber, region);

    // 電話番号の有効性チェック
    if (!util.isValidNumberForRegion(number, region)) {
      return null;
    }
    console.log('formatterの方' + util.format(number, PhoneNumberFormat.NATIONAL));
    // ハイフン付きの形式で返却
    return util.format(number, PhoneNumberFormat.NATIONAL);
  }
