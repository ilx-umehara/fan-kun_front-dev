export default function getDevicePixelRatio(responsive){
  const devicePixelRatio = window.devicePixelRatio;

  if(devicePixelRatio > 1 && devicePixelRatio <= 1.25){
    responsive = 'responsive125';
  }else if(devicePixelRatio > 1.25 && devicePixelRatio <= 1.50){
    responsive = 'responsive150';
  }else if(devicePixelRatio > 1.50){
    responsive = 'responsiveOver150';
  }

  // switch (true) {
  //   case 1 < devicePixelRatio && devicePixelRatio <= 1.25:
  //     responsive.header = 'responsiveHeader125';
  //     responsive.main = 'responsiveMain125';
  //     responsive.footer = 'responsiveFooter125';
  //     console.log('一番目');
  //     break;
  //   case devicePixelRatio > 1.25 && devicePixelRatio <= 1.50:
  //     responsive.header = 'responsiveHeader150';
  //     responsive.main = 'responsiveMain150';
  //     responsive.footer = 'responsiveFooter150';
  //     console.log('二番目');
  //     break;
  //     case devicePixelRatio > 1.50:
  //       responsive.header = 'responsiveHeaderOver150';
  //       responsive.main = 'responsiveMainOver150';
  //       responsive.footer = 'responsiveFooterOver150';
  //       console.log('オーバー');
  //       break;
  //   default:
  //     break;
  // }

  console.log(responsive);
  return responsive;
}