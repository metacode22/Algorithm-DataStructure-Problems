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

    this.size++;
  }

  dequeue() {
    if (this.head === null) return;

    const dequeuedValue = this.head.value;
    this.head = this.head.next;
    this.size--;

    return dequeuedValue;
  }

  isEmpty() {
    return this.size === 0;
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
