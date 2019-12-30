class NewArray {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  push(input) {
    // O(1)
    this.data[this.length] = input;
    this.length++;
  }

  indexOf(input) {
    //O(n)
    for (let key in this.data) {
      if (this.data[key] === input) {
        return key;
      }
    }
    return -1;
  }

  unshift(input) {
    // O(n)
    for (let i = this.length; i >= 1; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.length++;
    this.data[0] = input;
    console.log(this);
  }

  pop() {
    // O(1)
    delete this.data[this.length - 1];
    this.length--;
  }
}

const array = new NewArray();

array.push("hello");
array.push("Khadija");
array.unshift("Bitches");
array.unshift("Bitches");
