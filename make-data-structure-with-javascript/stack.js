class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.top === null) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }

    this.size++;
  }

  pop() {
    if (this.size <= 0) return;

    const poppedValue = this.top.value;

    this.top = this.top.next;
    this.size--;

    return poppedValue;
  }

  getSize() {
    return this.size;
  }

  display() {
    if (this.top === null) {
      console.log('empty');
      return;
    }
    
    let displayString = 'top ';
    let currentNode = this.top;
    
    while (currentNode !== null) {
      displayString += `${currentNode.value} `;
      currentNode = currentNode.next;
    }
    
    displayString += 'bottom';
    
    console.log(displayString);
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.display();
console.log(stack);
console.log(stack.top.value);
console.log(stack.top.next.value);
console.log(stack.top.next.next.value);
stack.pop();
console.log(stack);
stack.pop();
console.log(stack);
stack.pop();
console.log(stack);
stack.pop();
console.log(stack);
stack.push(1);
console.log(stack);
stack.push(2);
console.log(stack.pop());
stack.pop();
stack.pop();
stack.pop();
stack.pop();
console.log(stack);
stack.push(1);
console.log(stack);
stack.push(2);
console.log(stack);
console.log(stack.pop());
console.log(stack.pop());
stack.display();
