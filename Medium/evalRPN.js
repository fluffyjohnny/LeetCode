/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = (tokens) => {
  let stack = [];
  let num1, num2;

  for (let i = 0; i < tokens.length; i++) {
    // loop through the tokens array adding each integer to the stack
    if (Number.isInteger(+tokens[i])) {
      stack.push(tokens[i]);
    } else {
      // when you reach an operation symbol pop off the last two items from the array and pass into the calculate function. push result to stack.
      num2 = stack.pop();
      num1 = stack.pop();
      stack.push(calculate(+num1, +num2, tokens[i]));
    }
  }
  return stack[0];
};

const calculate = (first, second, operation) => {
  let answer;
  switch (operation) {
  case "+":
    answer = first + second;
    break;
  case "-":
    answer = first - second;
    break;
  case "*":
    answer = first * second;
    break;
  case "/":
    answer =
        first / second > 0
          ? Math.floor(first / second)
          : Math.ceil(first / second);
    break;
  default:
    return;
  }
  return answer;
};
