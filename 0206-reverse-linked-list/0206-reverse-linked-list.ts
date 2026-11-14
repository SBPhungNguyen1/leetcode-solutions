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

function reverseList(head: ListNode | null): ListNode | null {
    if (head === null) return null;
    const numStack = new Stack<number>();
    let head1 = head;
    while(head1!==null) {
        numStack.push(head1.val);
        head1 = head1.next;
    }
    console.log(numStack);
    const newHead = new ListNode(numStack.pop());
    let newHead1 = newHead;
    console.log(newHead, newHead.val);
    while (numStack.size() > 0) {
        const createdNode = new ListNode(numStack.pop());
        newHead1.next = createdNode;
        newHead1 = createdNode;
    }
    return newHead;
};