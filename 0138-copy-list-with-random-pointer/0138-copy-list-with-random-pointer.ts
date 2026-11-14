/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     next: _Node | null
 *     random: _Node | null
 * 
 *     constructor(val?: number, next?: _Node, random?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */


function copyRandomList(head: _Node | null): _Node | null {
    if (!head) return null;

    //  1. Interweave nodes
    let temp: Node | null = head;
    while (temp) {
        const copy = new Node(temp.val, temp.next, null);
        temp.next = copy;
        temp = copy.next;
    }

    //  2. Assign random pointers
    temp = head;
    while (temp) {
        if (temp.random) {
            temp.next!.random = temp.random.next;
        }
        temp = temp.next!.next;
    }

    //  3. Separate the lists
    const dummy = new Node(-1);
    let copyTail: Node | null = dummy;
    temp = head;
    while (temp) {
        copyTail.next = temp.next;
        copyTail = copyTail.next!;
        temp.next = temp.next!.next;
        temp = temp.next;
    }

    return dummy.next;
};