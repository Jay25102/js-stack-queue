/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    let temp = new Node(val);
    if (this.first === null) {
      this.first = temp;
      this.last = temp;
      this.size++;
    }
    else {
      temp.next = this.first;
      this.first = temp;
      this.size++;
    }
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    let temp = new Node(val);

    if (this.first === null) {
      this.first = temp;
      this.last = temp;
    }
    else {
      temp.next = this.first;
      this.first = temp;
    }
    this.size++;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
      return this.size === 0;
  }
}

module.exports = Stack;
