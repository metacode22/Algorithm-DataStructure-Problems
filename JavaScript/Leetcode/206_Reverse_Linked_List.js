const reverseList = head => {
  if (!head) return head;

  let reverse = new ListNode(head.val);
  head = head.next;

  while (head) {
    const newNode = new ListNode(head.val);
    newNode.next = reverse;
    reverse = newNode;
    head = head.next;
  }

  return reverse;
};
