// Extract substring between prefix and suffix

getvaluebetween = (str, p, s) => {
  indexOfString = str.indexOf(p);
  if (i === -1) return '';
  else {
    k = indexOfString  + p.length;
    str = str.substring(k);
    if (s) {
      i = str.indexOf(s);
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
