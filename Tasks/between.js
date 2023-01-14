// Extract substring between prefix and suffix

getvaluebetween = (str, prefix, suffix) => {
  indexOfString = str.indexOf(prefix);
  if (indexOfString  === -1) return '';
  else {
    k = indexOfString  + prefix.length;
    str = str.substring(k);
    if (suffix) {
      indexOfString  = str.indexOf(suffix);
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
