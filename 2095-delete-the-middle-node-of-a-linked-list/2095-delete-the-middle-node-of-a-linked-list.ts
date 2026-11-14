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

function deleteMiddle(head: ListNode | null): ListNode | null {
    const keep = head;
    const dummy = new ListNode(0, head);
    let head2 = keep;
    let head3 = dummy;
    while (head2 && head2.next) {
        head2 = head2.next.next;
        head3 = head3.next;
    }
    console.log(head3);
    if (head3 === dummy)
        return null;
    if (head3 && head3.next) {
        head3.next = head3.next.next;
    }
    return keep;
};