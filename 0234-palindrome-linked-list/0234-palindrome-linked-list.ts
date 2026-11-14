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

function isPalindrome(head: ListNode | null): boolean {
    const numArr : number[] = [];
    let head1 = head;
    while(head1 !== null) {
        numArr.push(head1.val);
        head1 = head1.next;
    }
    let left = 0;
    let right = numArr.length-1;
    while (left < right) {
        if (numArr[left] !== numArr[right])
            return false;
        left++;
        right--;
    } 
    return true;
}; 