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
  }

  insert(node, value) {
    const newNode = new Node(value);

    // fix: 그냥 find한 node가 null이라면 단순히 잘못된 입력이라고 생각한다. 따라서 바로 return해서 종료
    // 이 때 newNode는 가비지 컬렉션에 의해 이후에 제거될 거니까 그대로 놔둬도 될까?
    if (node === null) return;

    newNode.next = node.next;
    node.next = newNode;

    // fix: insert가 마지막 요소에 이루어질 수 있으므로, 이 경우 tail을 옮겨줘야 한다.
    if (newNode.next === null) {
      this.tail = newNode;
    }
  }

  remove(target) {
    if (this.head === null) return;

    let previousNode = this.head;

    // fix: 찾는 노드가 없을 경우, 즉 마지막 노드의 이전 노드까지 탐색하고 멈춰야 한다. 이에 따라 조건문 추가
    while (previousNode.next !== null && previousNode.next.value !== target) {
      previousNode = previousNode.next;
    }

    // fix: 찾는 노드가 없을 경우, 즉 마지막 노드의 이전 노드까지 탐색하고 멈춰야 한다.
    if (previousNode.next === null && previousNode.value !== target) return;
    if (this.tail === previousNode && previousNode.value === target) {
      this.head = null;
      this.tail = null;
      return;
    }

    previousNode.next = previousNode.next.next;
  }

  display() {
    let currentNode = this.head;
    let displayString = '[';

    while (currentNode !== null) {
      displayString += `${currentNode.value}, `;
      currentNode = currentNode.next;
    }

    // fix: 비어 있을 경우를 대비하여 해당 조건문 추가.
    if (displayString.length >= 3) {
      displayString = displayString.substring(0, displayString.length - 2);
    }
    displayString += ']';

    console.log(displayString);
  }
}

const linkedList = new singlyLinkedList();
console.log(linkedList.find(1));
linkedList.remove(3); //
linkedList.insert(linkedList.find(1), 1); //
linkedList.insert(linkedList.find(0), 2); // 
linkedList.remove(2); // 
linkedList.remove(1); // 
linkedList.display(); 
linkedList.append(1); // 1
linkedList.insert(linkedList.find(1), 1); // 1 1
linkedList.display();
linkedList.remove(1); // 1
linkedList.insert(linkedList.find(1), 4); // 1 4
linkedList.display();
linkedList.append(2); // 1 4 2
linkedList.display();
linkedList.append(7); // 1 4 2 7
linkedList.append(5); // 1 4 2 7 5
linkedList.insert(linkedList.find(12), 1); // 1 4 2 7 5
linkedList.insert(linkedList.find(1), 3); // 1 3 4 2 7 5
linkedList.insert(linkedList.find(5), 3); // 1 3 4 2 7 5 3
linkedList.display();
linkedList.remove(2); // 1 3 4 7 5 3
linkedList.display();
console.log(linkedList.find(5));
console.log(linkedList.find(3));
linkedList.remove(3); // 1 4 7 5 3
linkedList.display();
