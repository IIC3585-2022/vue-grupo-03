export function concatIntoStr(foTextArray, fieldArray) {
  let str = "";
  [...Array(foTextArray.length).keys()].forEach(i => {
    str = str + foTextArray[i]
    if (i < fieldArray.length) {
      if (fieldArray[i].field !== "from") {
        str = str + fieldArray[i].text
      }
    }
  })
  // console.log(str);
  return str;
}