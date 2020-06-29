export function checkBrowser() {
  var c = navigator.userAgent.search("Chrome");
  var f = navigator.userAgent.search("Firefox");
  var ie11 = navigator.userAgent.indexOf("Trident/7.0") > -1;
  var browser;
  if (c > -1) {
    browser = "Chrome";
  } else if (f > -1) {
    browser = "Firefox";
  } else if (ie11) browser = "IE11";
  return browser;
}
