export default function (fieldValue) {
  var pattern = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
  return pattern.test(fieldValue);
}
