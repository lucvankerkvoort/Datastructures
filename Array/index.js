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

    if (input) {
      for (let i = this.length; i >= 1; i--) {
        this.data[i] = this.data[i - 1];
      }
      this.length++;
      this.data[0] = input;
      console.log("unshift", this);
    } else {
      console.log("unshift", this);
    }
  }

  shift() {
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.pop();
    console.log("pop", this);
  }

  pop() {
    // O(1)
    delete this.data[this.length - 1];
    this.length--;
  }

  splice(start, deleteCount, item1, item2) {
    //   we are trying to find the starting position inside of the object

    for (let i = start; i < this.length - 1; i++) {
      this.data[i] = this.data[i + deleteCount];
    }
    for (let i = this.length - 1; i >= this.length - 1 - deleteCount; i--) {
      delete this.data[this.length - 1];
      this.length--;
    }
    console.log(this);

    // let i = 0;
    // console.log("start", this.data[start]);
    // if (this.data[start]) {
    //   while (i !== deleteCount) {
    //     delete this.data[start + i];
    //     i++;
    //     this.length--;
    //   }
    //   console.log(this);
    // }
  }
}

const array = new NewArray();

array.push("hello");
array.push("Khadija");
array.push("hello");
array.push("Khadija");
array.unshift("Biatch");
array.splice(1, 2);

const test = ["hello", "Khadija"];

test.splice(1, 1);
console.log(test);
