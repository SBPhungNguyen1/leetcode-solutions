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

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    let arr:number[] = [];

    let curr:ListNode = head;
    let i = 1;

    while(head != null){
        if(i >= left && i <= right){
            arr.push(head.val);
        }

        head = head.next;
        i++;
    }

    head = curr;
    i = 1;
    while(head != null){
        if(i >= left && i <= right){
            head.val = arr.pop();
        }
        if(i > right) break;

        head = head.next;
        i++;
    }

    return curr;

};