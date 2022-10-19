linkedList.remove(3); //
linkedList.insert(linkedList.find(1), 1); //
linkedList.insert(linkedList.find(0), 2); //
linkedList.remove(2); //
linkedList.remove(1); //
linkedList.display(); // []
linkedList.append(1); // 1
linkedList.insert(linkedList.find(1), 1); // 1 1
linkedList.display(); // 1 1
linkedList.remove(1); // 1
linkedList.insert(linkedList.find(1), 4); // 1 4
linkedList.display(); // 1 4
linkedList.append(2); 
linkedList.display(); // 1 4 2
linkedList.append(7); 
linkedList.append(5); 
linkedList.insert(linkedList.find(12), 1); 
linkedList.insert(linkedList.find(1), 3); 
linkedList.insert(linkedList.find(5), 3); 
linkedList.display(); // 1 3 4 2 7 5 3
linkedList.remove(2); 
linkedList.display(); // 1 3 4 7 5 3
linkedList.remove(3); 
linkedList.display(); // 1 4 7 5 3
linkedList.remove(3);
linkedList.display(); // 1 4 7 5
linkedList.remove(5);
linkedList.remove(4);
linkedList.remove(7);
console.log(linkedList.head);
console.log(linkedList.tail);
// linkedList.remove(1);
linkedList.display();
