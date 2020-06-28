export default function ieVersion() {
  var ua = window.navigator.userAgent;
  if (ua.indexOf("Trident/7.0") > -1) return 11;
  else if (ua.indexOf("Trident/6.0") > -1) return 10;
  else if (ua.indexOf("Trident/5.0") > -1) return 9;
  else return 0; // not IE9, 10 or 11
}

export function checkBrowser() {
  var c = navigator.userAgent.search("Chrome");
  var f = navigator.userAgent.search("Firefox");
  var m8 = navigator.userAgent.search("MSIE 8.0");
  var m9 = navigator.userAgent.search("MSIE 9.0");
  var ie11 = navigator.userAgent.indexOf("Trident/7.0") > -1;
  var browser;
  if (c > -1) {
    browser = "Chrome";
  } else if (f > -1) {
    browser = "Firefox";
  } else if (m9 > -1) {
    browser = "MSIE 9.0";
  } else if (m8 > -1) {
    browser = "MSIE 8.0";
  } else if (ie11) browser = "IE11";
  return browser;
}
