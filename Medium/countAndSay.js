/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = function (n) {
  let str = "1";

  while (n > 1) {
    let newStr = "",
      count = 0,
      say = str[0];

    for (let i = 0; i < str.length; i += 1) {
      if (str[i] === say) {
        count += 1;
      } else {
        newStr += count + say;
        count = 1;
        say = str[i];
      }
    }

    str = newStr + count + say;
    n -= 1;
  }
  return str;
};

console.log(countAndSay(4));
