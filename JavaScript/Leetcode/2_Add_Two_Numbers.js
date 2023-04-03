const addTwoNumbers = (l1, l2) => {
  const dummy = new ListNode();
  let dummyPointer = dummy;
  let deliver = 0;

  while (l1 || l2) {
    const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + deliver;

    if (sum >= 10) {
      deliver = 1;
      dummyPointer.next = new ListNode(sum - 10);
      dummyPointer = dummyPointer.next;
    } else {
      dummyPointer.next = new ListNode(sum);
      dummyPointer = dummyPointer.next;
      deliver = 0;
    }

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  if (deliver) {
    dummyPointer.next = new ListNode(deliver);
  }

  return dummy.next;
};
