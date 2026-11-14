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

function hasCycle(head: ListNode | null): boolean {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow!.next;          // Chạy 1 bước
        fast = fast.next.next;      // Chạy 2 bước

        // Nếu 2 con trỏ gặp nhau -> Có chu trình (Cycle)
        if (slow === fast) {
            return true;
        }
    }

    // Nếu fast chạm null -> Danh sách kết thúc -> Không có chu trình
    return false;
};