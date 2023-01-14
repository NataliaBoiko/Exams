// Extract substring between prefix and suffix

getvaluebetween = (str, prefix, s) => {
  indexOfString = str.indexOf(prefix);
  if (indexOfString  === -1) return '';
  else {
    k = indexOfString  + prefix.length;
    str = str.substring(k);
    if (s) {
      indexOfString  = str.indexOf(s);
      if (indexOfString  === -1) {
        return '';
      } else {
        str = str.substring(0, indexOfString);
      }
    }
  }
  return str;
};

require('../Tests/between.js')(getvaluebetween);
