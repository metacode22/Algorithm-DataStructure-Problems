class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear] = value;
    this.rear++;
  }
  dequeue() {
    if (this.queue.length === 0) return null;
    
    const dequeuedValue = this.queue[this.front];
    
    if (this.front < this.rear) {
      delete this.queue[this.front];
      this.front++;
    }

    return dequeuedValue;
  }

  peek() {
    return this.queue[this.front];
  }

  display() {}

  getSize() {
    return this.rear - this.front;
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