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

function doubleIt(head: ListNode | null): ListNode | null {

    let carry = helper(head);
    if (carry) return new ListNode(1, head);
    return head;

    function helper(head: ListNode | null) {
        if (head === null) return 0;
        let carry = helper(head.next);
        let val = (head.val * 2) + carry;
        head.val = val % 10;
        return val >= 10 ? 1 : 0;
    };
};