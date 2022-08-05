class MyQueue {
  constructor() {
    this.pushStack = [];
    this.popStack = [];
  }

  /**
   * @param {number} x
   * @return {void}
   */
  push(val) {
    this.pushStack.push(val);
  }

  /**
   * @return {number}
   */
  pop() {
    if (!this.popStack.length) {
      while (this.pushStack.length) {
        this.popStack.push(this.pushStack.pop());
      }
    }
    return this.popStack.pop();
  }

  /**
   * @return {number}
   */
  peek() {
    if (!this.popStack.length) {
      while (this.pushStack.length) {
        this.popStack.push(this.pushStack.pop());
      }
    }

    return this.popStack[this.popStack.length - 1];
  }

  /**
   * @return {boolean}
   */
  empty() {
    return !this.pushStack.length && !this.popStack.length;
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
