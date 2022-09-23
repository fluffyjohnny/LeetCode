let stack;

const MinStack = function () {
  stack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  stack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return stack[stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  let min = Infinity;
  for (let item of stack) {
    if (min > item) min = item;
  }

  return min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
