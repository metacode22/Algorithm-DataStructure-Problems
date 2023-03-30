// 2023-03-30
const isPalindrome = head => {
  if (!head.next) return true;
  if (!head.next.next) {
    return head.val === head.next.val;
  }

  const values = [];

  while (head !== null) {
    values.push(head.val);
    head = head.next;
  }

  let left;
  let right;
  if (values.length % 2 === 0) {
    left = values.length / 2 - 1;
    right = values.length / 2;
  } else {
    left = Math.floor(values.length / 2) - 1;
    right = Math.floor(values.length / 2) + 1;
  }

  while (left >= 0 && right < values.length) {
    if (values[left] !== values[right]) return false;
    left -= 1;
    right += 1;
  }

  return true;
};
