/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function merge2(a: ListNode | null, b: ListNode | null, dummy: ListNode): ListNode | null {
  let tail = dummy;
  while (a !== null && b !== null) {
    if (a.val <= b.val) {
      tail.next = a;
      a = a.next;
    } else {
      tail.next = b;
      b = b.next;
    }
    tail = tail.next!;
  }
  tail.next = a !== null ? a : b;
  return dummy.next;
}

function split(lists: Array<ListNode | null>, lo: number, hi: number, dummy: ListNode): ListNode | null {
  if (lo === hi) return lists[lo];
  const mid = (lo + hi) >> 1;
  return merge2(split(lists, lo, mid, dummy), split(lists, mid + 1, hi, dummy), dummy);
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (lists.length === 0) return null;
  return split(lists, 0, lists.length - 1, new ListNode(0));
}