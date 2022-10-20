class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class singlyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  find(target) {
    let currentNode = this.head;

    // fix: currentNode가 null이 되면 탐색을 마지막까지 하고 못 찾은 것이므로 이를 조건문에 추가.
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
      this.tail = newNode;
    }

    this.size += 1;
  }

  insert(node, value) {
    // fix: 그냥 find한 node가 null이라면 단순히 잘못된 입력이라고 생각한다. 따라서 바로 return해서 종료
    if (node === null) return;

    const newNode = new Node(value);

    newNode.next = node.next;
    node.next = newNode;

    // fix: insert가 마지막 요소에 이루어질 수 있으므로, 이 경우 tail을 옮겨줘야 한다.
    if (newNode.next === null) this.tail = newNode;

    this.size += 1;
  }

  remove(target) {
    if (this.head === null) return;

    let previousNode = this.head;

    // fix: 애초에 head를 지우려 하는 경우
    if (previousNode === this.head && previousNode !== this.tail && previousNode.value === target) {
      this.head = previousNode.next;
      this.size -= 1;
      return;
    }

    // fix: 찾는 노드가 없을 경우, 즉 마지막 노드의 이전 노드까지 탐색하고 멈춰야 한다. 이에 따라 조건문 추가
    while (previousNode.next !== null && previousNode.next.value !== target) {
      previousNode = previousNode.next;
    }

    // fix: 찾는 노드가 없을 경우, 마지막 노드(tail)까지 탐색했을 것이다.
    if (previousNode === this.head && previousNode === this.tail && previousNode.value === target) {
      this.head = null;
      this.tail = null;
      this.size = 0;
      return;
    }

    // fix: 여기까지 온 것은 제거할 노드를 연결 리스트 내에서 못 찾았다는 뜻이다.
    if (previousNode.next === null) return;

    // fix: 지우려는 것이 tail이라면 tail을 앞당겨준다.
    if (previousNode.next === this.tail) this.tail = previousNode;
    previousNode.next = previousNode.next.next;
    this.size -= 1;
  }

  display() {
    let currentNode = this.head;
    let displayString = '[';

    while (currentNode !== null) {
      displayString += `${currentNode.value}, `;
      currentNode = currentNode.next;
    }

    // fix: 비어 있을 경우를 대비하여 해당 조건문 추가. 즉 비어있지 않다면 밑의 구문 실행.
    if (displayString.length >= 3) {
      displayString = displayString.substring(0, displayString.length - 2);
    }
    displayString += ']';

    console.log(displayString);
  }

  getSize() {
    return this.size;
  }
}

const linkedList = new singlyLinkedList();
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
