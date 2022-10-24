class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  find(target) {
    let currentNode = this.head;

    if (currentNode === null) return null;

    do {
      if (currentNode.value === target) return currentNode;
      currentNode = currentNode.next;
    } while (currentNode !== this.head);

    return null;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.tail.next = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.tail.next = this.head;
    }

    this.size += 1;
  }

  insert(node, value) {
    if (node === null) return;

    const newNode = new Node(value);

    newNode.next = node.next;
    node.next = newNode;

    if (newNode.next === this.head) this.tail = newNode;

    this.size += 1;
  }

  remove(target) {
    if (this.head === null) return;

    let previousNode = this.head;

    if (previousNode.value === target && previousNode.next === this.head) {
      this.head = null;
      this.tail = null;
      this.size = 0;
      return;
    }

    if (previousNode.value === target) {
      this.head = previousNode.next;
      this.tail.next = this.head;
      this.size -= 1;
      return;
    }

    while (previousNode.next !== this.head && previousNode.next.value !== target) {
      previousNode = previousNode.next;
    }

    // 끝까지 오고 못 찾은 경우
    if (previousNode.next === this.head && previousNode.value !== target) return;

    if (previousNode.next === this.tail) this.tail = previousNode;
    previousNode.next = previousNode.next.next;
    this.size -= 1;
  }

  display() {
    let displayString = '[';
    let currentNode = this.head;

    if (currentNode === null) {
      console.log('[]');
      return;
    }

    do {
      displayString += `${currentNode.value}, `;
      currentNode = currentNode.next;
    } while (currentNode !== this.head);

    displayString = displayString.substring(0, displayString.length - 2);
    displayString += ']';
    console.log(displayString);
  }

  getSize() {
    return this.size;
  }

  traversal() {
    const LIMIT_COUNT = 20;
    let currentCount = 0;
    let currentNode = this.head;
    let displayString = '[';

    if (currentNode === null) {
      console.log('[]');
      return;
    }

    while (currentCount < LIMIT_COUNT) {
      displayString += `${currentNode.value}, `;
      currentNode = currentNode.next;
      currentCount++;
    }

    displayString = displayString.substring(0, displayString.length - 2);
    displayString += ']';
    console.log(displayString);
  }
}

const linkedList = new CircularLinkedList();
// linkedList.append(1);
// linkedList.append(2);
// linkedList.append(3);
// linkedList.remove(1);
// linkedList.display();
// console.log(linkedList.head.value);
// console.log(linkedList.head.next.value);
// console.log(linkedList.head.next.next.value);
// console.log(linkedList.head.next.next.next.value);
// console.log(linkedList.head.next.next.next.next.value);
// console.log(linkedList.head.next.next.next.next.next.value);
// console.log(linkedList.head.next.next.next.next.next.next.value);
// console.log(linkedList.head.next.next.next.next.next.next.next.value);
// linkedList.traversal();
// linkedList.display();
// console.log(linkedList.getSize());
console.log(linkedList.find(3));
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
linkedList.insert(linkedList.find(12), 1);
linkedList.insert(linkedList.find(1), 3);
linkedList.insert(linkedList.find(5), 3);
linkedList.display(); // 2 7 5 3
linkedList.traversal();
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
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.remove(4);
linkedList.display();
linkedList.traversal();
