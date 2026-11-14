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

function middleNode(head: ListNode | null): ListNode | null {
    const arr: number[] = [];
    let curHead = head;
    while (curHead) {
        arr.push(curHead.val);
        curHead = curHead.next;
    }
    console.log(arr);
    const cut = arr.length % 2 === 0 ? arr.length / 2 : Math.floor(arr.length / 2);
    console.log(cut);
    const newArr = arr.slice(cut);
    console.log(newArr);
    const newHead = new ListNode(newArr[0]);
    curHead = newHead;
    for(let i = 1; i < newArr.length; i++) {
        const newNode = new ListNode(newArr[i]);
        curHead.next = newNode;
        curHead = newNode;
    }
    return newHead;
};