var url = window.location.href;

const KEIO_LOGIN  = 'otp-libproxy2.keio.jp';
const KEIO_AUTH = 'auth.lib.keio.ac.jp';
const TIMEOUT = 'kras1.lib.keio.ac.jp';
const SPRINGER = 'link.springer.com';
const IEEE = 'ieeexplore.ieee.org';
const LOGIN = 'er.lib.keio.ac.jp.kras1.lib.keio.ac.jp';
const GOOGLE_SCHOLAR_URL = 'https://scholar-google-co-jp.kras1.lib.keio.ac.jp/';

var url_prefix = url.split('/')[2];

function callClickEvent2(element){
  var evt = document.createEvent("MouseEvents");
  evt.initMouseEvent("click", true, true, window,
  0, 0, 0, 0, 0, false, false, false, false, 0, null);
  element.dispatchEvent(evt);
}

switch(url_prefix){
  case KEIO_LOGIN:
    var url_referrer = document.referrer; 
    if(url_referrer !== null && url_referrer !== undefined && 
    url_referrer !== ""){
      var referrer = url_referrer.split('/')[2];
      if (referrer === KEIO_AUTH) {
        $("input").change(function(){
          setTimeout(function(){callClickEvent2(document.querySelectorAll('input')[2]); },300);
        });
      } else {
        $("input").change(function(){
          setTimeout(function(){document.querySelectorAll('input')[2].click(); },300);
        });
      }
    } else {
      $("input").change(function(){
        setTimeout(function(){document.querySelectorAll('input')[2].click(); },300);
      });
    }

    break;

  case KEIO_AUTH:
    setTimeout(function(){callClickEvent2(document.querySelectorAll('input')[0]); },1000);
    break;

  case TIMEOUT:
    location.href = 'https://otp-libproxy2.keio.jp/app/remote/keiojp/';
    break;

  case SPRINGER:
    var sarr = url.split(SPRINGER);
    var redirect_url = sarr[0] + SPRINGER +'.kras1.lib.keio.ac.jp' + sarr[1]
    location.href = redirect_url
    break;

  case IEEE:
    var sarr = url.split(IEEE);
    var redirect_url = sarr[0] + IEEE +'.kras1.lib.keio.ac.jp' + sarr[1]
    location.href = redirect_url
    break;

  case LOGIN:
    location.href = GOOGLE_SCHOLAR_URL; 
    break;
}

