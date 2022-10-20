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
      if (this.rear - this.front <= 0) return;
      
      const dequeuedValue = this.queue[this.front];
      
      if (this.front < this.rear) {
          delete this.queue[this.front];
          this.front++;
      }
      
      return dequeuedValue;
  }
  getSize() {
      return this.rear - this.front;
  }
  peek() {
      return this.queue[this.front];
  }
  getMaxValue() {
      let start = this.front;
      let end = this.rear;
      let maxValue = -999999999;
      
      while(start < end) {
          if (this.queue[start][0] > maxValue) maxValue = this.queue[start][0];
          start++;
      }
      
      return maxValue;
  }
}

function solution(priorities, location) {
  let count = 0;
  const queue = new Queue();
  priorities.forEach((priority, index) => queue.enqueue([priority, index]));
  
  while (queue.getSize() > 0) {
      const maxPriority = queue.getMaxValue();
      const [priority, index] = queue.dequeue();
      
      if (priority >= maxPriority) {
          count++;
          
          if (index === location) return count;
      } else {
          queue.enqueue([priority, index]);
      }
  }
  
  return count;
}
