class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return console.log(this.first);
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.first === null) {
      this.first = newNode;
      console.log(this.first);
      this.last = this.first;
      console.log(this.last);
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    console.log(this);
  }

  dequeue() {
    let currentFirst = this.first;
    this.first = this.first.next;
    console.log(currentFirst);
  }
}

const myQueue = new Queue();
myQueue.enqueue(20);
myQueue.enqueue(30);
myQueue.enqueue(40);
myQueue.enqueue(50);
myQueue.enqueue(60);
myQueue.enqueue(70);
myQueue.enqueue(80);
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.peek();
