class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class doublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  find(target) {
    let currentNode = this.head;

    while ((currentNode !== null) & (currentNode.value !== target)) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.size += 1;
  }

  insert(node, value) {
    if (node === null) return;

    const newNode = new Node(value);

    // find 해서 찾은 node가 tail일 경우
    if (node.next === null) {
      node.next = newNode;
      newNode.prev = node;
      this.tail = newNode;

      this.size += 1;
      return;
    }

    node.next = newNode;
    node.next.prev = newNode;
    newNode.prev = node;
    newNode.next = node.next;
    this.size += 1;
  }

  remove(target) {
    if (this.head === null) return;

    let previousNode = this.head;

    while (previouseNode.next !== null && previouseNode.next.value !== target) {
      previousNode = previousNode.next;
    }
    
    // 마지막 노드를 제거할 경우를 생각
    if (previouseNode.next === null && previouseNode.value !== target) return;
    if (this.tail)
  }

  display() {
    let displayString = '[';
  }

  getSize() {
    return this.size;
  }
}

// find해서 prev와 prev.prev, next와 next.next를 한 번 찍어보자
