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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (head === null || head.next === null)
        return head;

    let dummy = new ListNode(0);
    dummy.next = head;
    let fast = dummy;
    let slow = dummy;

    let i = 0;
    for (i = 0; fast.next !== null; i++) {
        fast = fast.next;
    }

    for (let j = i - k % i; j > 0; j--) {
        slow = slow.next;
    }

    fast.next = dummy.next;
    dummy.next = slow.next;
    slow.next = null;

    return dummy.next;

};