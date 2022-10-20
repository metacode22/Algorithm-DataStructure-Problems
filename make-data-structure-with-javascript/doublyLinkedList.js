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

    while (currentNode !== null && currentNode.value !== target) {
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

    if (
      previousNode.next !== null &&
      previousNode === this.head &&
      previousNode !== this.tail &&
      previousNode.value === target
    ) {
      this.head = previousNode.next;
      previousNode.prev = null;
      this.size -= 1;
      return;
    }

    while (previousNode.next !== null && previousNode.next.value !== target) {
      previousNode = previousNode.next;
    }

    if (previousNode === this.head && previousNode === this.tail && previousNode.value === target) {
      this.head = null;
      this.tail = null;
      this.size = 0;
      return;
    }

    if (previousNode.next === null) return;

    if (previousNode.next === this.tail) {
      this.tail = previousNode;
      previousNode.next = null;
      this.size -= 1;
      return;
    }

    previousNode.next = previousNode.next.next;
    previousNode.next.next.prev = previousNode;
    this.size -= 1;
  }

  display() {
    let currentNode = this.head;
    let displayString = '[';

    while (currentNode !== null) {
      displayString += `${currentNode.value}, `;
      currentNode = currentNode.next;
    }

    if (displayString.length >= 3) {
      displayString = displayString.substring(0, displayString.length - 2);
    }

    displayString += ']';

    console.log(displayString);
  }

  getSize() {
    return this.size;
  }

  forwardTraversal() {
    let currentNode = this.head;
    console.log('forward traversal');

    do {
      if (currentNode.value !== null) console.log(currentNode.value);
      currentNode = currentNode.next;
    } while (currentNode !== null);
  }

  reverseTraversal() {
    let currentNode = this.tail;
    console.log('reverse traversal');
    
    do {
      if (currentNode.value !== null) console.log(currentNode.value);
      currentNode = currentNode.prev;
    } while(currentNode !== null)
    
  }
}

// find해서 prev와 prev.prev, next와 next.next를 한 번 찍어보자
const linkedList = new doublyLinkedList();
linkedList.remove(3); //
linkedList.insert(linkedList.find(1), 1); //
linkedList.insert(linkedList.find(0), 2); //
linkedList.remove(1); //
linkedList.display(); // []
linkedList.append(1); //
linkedList.insert(linkedList.find(1), 1); //
linkedList.display(); // 1 1
linkedList.remove(1);
linkedList.display(); // 1
linkedList.remove(1);
linkedList.insert(linkedList.find(1), 4); //
linkedList.display(); // []
linkedList.append(2);
linkedList.display(); // 2
linkedList.append(7);
linkedList.append(5);
linkedList.display();
linkedList.insert(linkedList.find(12), 1);
linkedList.insert(linkedList.find(1), 3);
linkedList.insert(linkedList.find(5), 3);
linkedList.display(); // 2 7 5 3
console.log(linkedList.find(5).prev.prev);
console.log(linkedList.find(7).next.next);
linkedList.forwardTraversal();
linkedList.reverseTraversal();
linkedList.remove(2);
linkedList.display(); // 7 5 3
linkedList.remove(3);
linkedList.display(); // 7 5
linkedList.remove(3);
linkedList.display(); // 7 5
linkedList.remove(5);
linkedList.remove(4);
linkedList.remove(7);
linkedList.remove(1);
linkedList.display(); // []
