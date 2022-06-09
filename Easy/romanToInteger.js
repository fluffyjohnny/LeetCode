/**
 * Leetcode #13
 */

const romanToInt = function(s) {
  let result = 0;
  for (const symbol of s) {
    if (symbol === "I") result += 1;
    if (symbol === "V") result += 5;
    if (symbol === "X") result += 10;
    if (symbol === "L") result += 50;
    if (symbol === "C") result += 100;
    if (symbol === "D") result += 500;
    if (symbol === "M") result += 1000;
  }

  if (s.includes("IV")) result -= 2;
  if (s.includes("IX")) result -= 2;
  if (s.includes("XL")) result -= 20;
  if (s.includes("XC")) result -= 20;
  if (s.includes("CD")) result -= 200;
  if (s.includes("CM")) result -= 200;
  return result;
};

console.log(romanToInt('IV'));