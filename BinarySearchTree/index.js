class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    console.log(newNode);
    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (currentNode.value < value) {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return console.log(this);
          }
          currentNode = currentNode.right;
        } else {
          if (!currentNode.left) {
            currentNode.left = newNode;
          }
          currentNode = currentNode.left;
          return console.log(this);
        }
      }
    }
  }
  lookup(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value > value) {
        currentNode = currentNode.left;
      } else if (currentNode.value < value) {
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return console.log(currentNode);
      } else {
        return console.log(false);
      }
    }
  }
  remove(value){
    if(!this.root){
      return false;
    }

  }
}

const myBinarySearchTree = new BinarySearchTree();
myBinarySearchTree.insert(9);
myBinarySearchTree.insert(4);
myBinarySearchTree.insert(11);
myBinarySearchTree.insert(15);
myBinarySearchTree.insert(13);
myBinarySearchTree.insert(10);
myBinarySearchTree.lookup(28);
