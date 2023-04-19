const swapPairs = head => {
  if (!head || !head.next) return head;

  let dummy = new ListNode();
  let previous = dummy;

  while (head && head.next) {
    target = head.next;

    head.next = target.next;
    target.next = head;

    previous.next = target;

    previous = target.next;
    head = head.next;
  }

  return dummy.next;
};
