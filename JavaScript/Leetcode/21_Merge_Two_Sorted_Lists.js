// 2023-04-01
const mergeTwoLists = (list1, list2) => {
  if (!list1 && !list2) return null;
  if (!list1) return list2;
  if (!list2) return list1;

  const dummy = new ListNode();
  let head = dummy;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      head.next = list1;
      list1 = list1.next;
    } else {
      head.next = list2;
      list2 = list2.next;
    }

    head = head.next;
  }

  if (list1) {
    head.next = list1;
  }

  if (list2) {
    head.next = list2;
  }

  return dummy.next;
};

// 2022-10-15
// var mergeTwoLists = function (list1, list2) {
//   let dummy = new ListNode(-1, null);
//   let headPointer = dummy;

//   while (list1 && list2) {
//     if (list1.val < list2.val) {
//       dummy.next = list1;
//       list1 = list1.next;
//     } else {
//       dummy.next = list2;
//       list2 = list2.next;
//     }
//     dummy = dummy.next;
//   }

//   dummy.next = list1 || list2;

//   return headPointer.next;
// };
