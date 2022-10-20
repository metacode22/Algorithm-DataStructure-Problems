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