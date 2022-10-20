// function solution(priorities, location) {
//   const newPriorities = [...priorities].map((value, index) => ({
//     value: value,
//     index: index,
//   }));
//   let count = 0;

//   while (newPriorities.length > 0) {
//     const currentPriority = newPriorities.shift();
//     const hasHigherPriority = newPriorities.some(element => element.value > currentPriority.value);

//     if (hasHigherPriority === true) {
//       newPriorities.push(currentPriority);
//     } else {
//       count += 1;

//       if (currentPriority.index === location) {
//         return count;
//       }
//     }
//   }
// }

// Array로 구현한 Linear Queue로 풀기
// class Queue {
//   constructor() {
//       this.queue = [];
//       this.front = 0;
//       this.rear = 0;
//   }

//   enqueue(value) {
//       this.queue[this.rear] = value;
//       this.rear++;
//   }
//   dequeue() {
//       if (this.rear - this.front <= 0) return;

//       const dequeuedValue = this.queue[this.front];

//       if (this.front < this.rear) {
//           delete this.queue[this.front];
//           this.front++;
//       }

//       return dequeuedValue;
//   }
//   getSize() {
//       return this.rear - this.front;
//   }
//   peek() {
//       return this.queue[this.front];
//   }
//   getMaxValue() {
//       let start = this.front;
//       let end = this.rear;
//       let maxValue = -999999999;

//       while(start < end) {
//           if (this.queue[start][0] > maxValue) maxValue = this.queue[start][0];
//           start++;
//       }

//       return maxValue;
//   }
// }

// function solution(priorities, location) {
//   let count = 0;
//   const queue = new Queue();
//   priorities.forEach((priority, index) => queue.enqueue([priority, index]));

//   while (queue.getSize() > 0) {
//       const maxPriority = queue.getMaxValue();
//       const [priority, index] = queue.dequeue();

//       if (priority >= maxPriority) {
//           count++;

//           if (index === location) return count;
//       } else {
//           queue.enqueue([priority, index]);
//       }
//   }

//   return count;
// }

// Linked List로 구현한 Linear Queue로 풀기
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class Queue {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.size = 0;
//     }

//     enqueue(value) {
//         const newNode = new Node(value);

//         if (this.head === null) {
//             this.head = newNode;
//             this.tail = newNode;
//         } else {
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }

//         this.size++;
//     }
//     dequeue() {
//         if (this.head === null) return null;

//         if (this.head === this.tail) {
//             const dequeuedValue = this.head.value;
//             this.head = null;
//             this.tail = null;
//             this.size = 0;
//             return dequeuedValue;
//         }

//         const dequeuedValue = this.head.value;
//         this.head = this.head.next;
//         this.size -= 1;
//         return dequeuedValue;
//     }
//     getSize() {
//         return this.size;
//     }
//     peek() {
//         return this.head.value;
//     }
// }

// function solution(priorities, location) {
//     let count = 0;
//     const queue = new Queue();
//     priorities.forEach((priority, index) => queue.enqueue([priority, index]));

//     priorities.sort((a, b) => b - a); // 제일 큰 놈이 항상 앞에! 그냥 dequeue만 되는 상황이 아니라면 priorities[count]는 계속 가장 큰 값을 가르키고 있다.

//     while(queue.getSize() > 0) {
//         const [currentValue, currentIndex] = queue.peek();

//         if (priorities[count] <= currentValue) {
//             queue.dequeue();
//             count++;

//             if (currentIndex === location) return count;
//         } else {
//             queue.enqueue(queue.dequeue());
//         }
//     }
// }
