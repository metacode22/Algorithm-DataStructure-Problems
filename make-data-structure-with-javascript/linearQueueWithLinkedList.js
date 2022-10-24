class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size += 1;
  }
  dequeue() {
    if (this.head === null) return null;

    if (this.head === this.tail) {
      const dequeuedValue = this.head.value;
      this.head = null;
      this.tail = null;
      this.size = 0;
      return dequeuedValue;
    }

    const dequeuedValue = this.head.value;
    this.head = this.head.next;
    this.size -= 1;
    return dequeuedValue;
  }
  getSize() {
    return this.size;
  }
  peek() {
    return this.head.value;
  }
}

const queue = new Queue();
console.log(queue.dequeue());
console.log(queue);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);
console.log(queue.dequeue());
queue.enqueue(8);
console.log(queue);
console.log(queue.getSize());
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.getSize());
console.log(queue);
