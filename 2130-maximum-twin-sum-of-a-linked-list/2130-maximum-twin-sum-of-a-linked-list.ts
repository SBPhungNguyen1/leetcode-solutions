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

function pairSum(head: ListNode | null): number {
    const arr = [];
    const keep = head;
    while (head) {
        arr.push(head.val);
        head = head.next;
    }
    let max = -Infinity;
    for (let i = 0; i < arr.length / 2; i++) {
        max = Math.max(max, arr[i] + arr[arr.length - 1 - i]);
    }
    return max;
};