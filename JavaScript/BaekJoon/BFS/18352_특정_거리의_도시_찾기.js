class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }
  
  enqueue(value) {
    this.queue[this.rear++] = value;
  }
  
  dequeue() {
    const dequeuedValue = this.queue[this.front];
    delete this.queue[this.front++];
    
    return dequeuedValue;
  }
  
  isEmpty() {
    return this.front === this.rear;
  }
}

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m, k, x] = input[0].split(' ').map(string => Number(string));
const streets = input.slice(1).map(street => street.split(' ').map(string => Number(string)));
const graph = Array.from({ length: n + 1 }, () => []);

streets.forEach(([from, to]) => graph[from].push(to));

const solution = (graph, n, start, k) => {
  const shortestDistances = new Array(n + 1).fill(Infinity);
  const visited = new Array(n + 1).fill(false);
  const result = [];

  const queue = new Queue();
  queue.enqueue([start, 0]);
  visited[start] = true;

  while (!queue.isEmpty()) {
    const [current, count] = queue.dequeue();

    for (const next of graph[current]) {
      if (visited[next]) continue;
      shortestDistances[next] = count + 1;
      visited[next] = true;
      queue.enqueue([next, count + 1]);
    }
  }

  shortestDistances.forEach((shortestDistance, index) => {
    if (shortestDistance === k) result.push(index);
  });

  return result;
};

const result = solution(graph, n, x, k);
if (!result.length) console.log(-1);
else console.log(result.join('\n'));
