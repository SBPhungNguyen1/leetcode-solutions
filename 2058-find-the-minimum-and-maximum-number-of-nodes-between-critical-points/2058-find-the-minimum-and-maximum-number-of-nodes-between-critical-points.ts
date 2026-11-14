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

function nodesBetweenCriticalPoints(head: ListNode | null): number[] {
    if (!head || !head.next || !head.next.next){
        return [-1, -1];
    }

    let firstCriticalIdx = -1;
    let prevCriticalIdx = -1;
    let minDistance = Infinity;

    let prev = head;
    let curr = head.next;
    let index = 1;

    while (curr && curr.next) {
        const isMaxima = curr.val > prev.val && curr.val > curr.next.val;
        const isMinima = curr.val < prev.val && curr.val < curr.next.val;

        if (isMaxima || isMinima) {
            if (firstCriticalIdx === -1) {
                firstCriticalIdx = index;
            } else {
                minDistance = Math.min(minDistance, index - prevCriticalIdx);
            }

            prevCriticalIdx = index;
        }

        prev = curr;
        curr = curr.next;
        index++;
    }

    if (minDistance === Infinity) {
        return [-1, -1];
    }

    const maxDistance = prevCriticalIdx - firstCriticalIdx;
    return [minDistance, maxDistance];
};