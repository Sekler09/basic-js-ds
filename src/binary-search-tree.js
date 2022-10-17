const { NotImplementedError } = require('../extensions/index.js');

//const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootEl = null;
  }

  root() {
    return this.rootEl;
  }

  add(data) {
    if (!this.rootEl) {
      this.rootEl = new Node(data);
    } else {
      this.addNode(this.rootEl, data);
    }
  }

  addNode(node, data) {
    if (node.data < data) {
      if (!node.right) {
        node.right = new Node(data);
      } else {
        this.addNode(node.right, data);
      }
    } else {
      if (!node.left) {
        node.left = new Node(data);
      } else {
        this.addNode(node.left, data);
      }
    }
  }

  has(data) {
    return this.find(data) ? true : false;
  }

  find(data) {
    return this.findNode(this.rootEl, data);
  }
  findNode(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      return this.findNode(node.left, data);
    } else if (data > node.data) {
      return this.findNode(node.right, data);
    } else {
      return node;
    }
  }

  remove(data) {
    if (this.findNode(this.rootEl, data)) {
      this.rootEl = this.removeNode(this.rootEl, data);
    }
  }
  removeNode(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      if (!node.left && !node.right) {
        node = null;
        return node;
      }
      if (!node.left) {
        node = node.right;
        return node;
      }
      if (!node.right) {
        node = node.left;
        return node;
      }
      let minNode = this.Min(node.right);
      node.data = minNode.data;
      node.right = this.removeNode(node.right, minNode.data);
      return node;
    }
  }

  min() {
    let tree = this.root()
    while(tree.left)(
      tree = tree.left
    )
    return tree.data
  }
  findMinNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }

  max() {
    let tree = this.root()
    while(tree.right)(
      tree = tree.right
    )
    return tree.data
  }
  findMaxNode(node) {
    if (node.right === null) {
      return node;
    } else {
      return this.findMaxNode(node.right);
    }
  }
}

module.exports = {
  BinarySearchTree
};
