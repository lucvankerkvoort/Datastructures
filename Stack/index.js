class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    if (!this.bottom) {
      this.bottom = newNode;
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }

    let currentNode = this.top;
    this.top = this.top.next;
    this.length--;
    return currentNode;
  }
}

const myStack = new Stack();
myStack.push(20);
myStack.push(40);
myStack.push(60);
myStack.peek();
myStack.pop();
