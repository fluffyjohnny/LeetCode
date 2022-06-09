const addTwoNumbers = function (l1, l2) {
  const reversedArr = (arr) => {

    return arr.reverse().join().replace(/,/g, "");
    
  };

  const reversedL1 = Number(reversedArr(l1));
  const reversedL2 = Number(reversedArr(l2));
  const sum = reversedL1 + reversedL2;

  return sum.toString().split("");
};

console.log(addTwoNumbers([1, 2, 3], [4, 5, 6]));
