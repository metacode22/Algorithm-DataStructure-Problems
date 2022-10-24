class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(node) {
    this.root = node;
  }

  preorder() {
    const result = [];

    const _preorder = node => {
      if (node !== null) {
        result.push(node.value);
        _preorder(node.left);
        _preorder(node.right);
      }
    };

    _preorder(this.root);
    console.log(result.join(' ').trim());
  }

  inorder() {
    const result = [];

    const _inorder = node => {
      if (node !== null) {
        _inorder(node.left);
        result.push(node.value);
        _inorder(node.right);
      }
    };

    _inorder(this.root);
    console.log(result.join(' ').trim());
  }

  postorder() {
    const result = [];

    const _postorder = node => {
      if (node !== null) {
        _postorder(node.left);
        _postorder(node.right);
        result.push(node.value);
      }
    };

    _postorder(this.root);
    console.log(result.join(' ').trim());
  }
}

const BinaryTree = new Tree(new Node(1));
BinaryTree.root.left = new Node(2);
BinaryTree.root.right = new Node(3);
BinaryTree.root.left.left = new Node(4);
BinaryTree.root.left.right = new Node(5);
BinaryTree.root.right.left = new Node(6);
BinaryTree.root.right.right = new Node(7);
BinaryTree.root.left.left.left = new Node(8);
BinaryTree.preorder();
BinaryTree.inorder();
BinaryTree.postorder();
