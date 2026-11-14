function findKthLargest(nums: number[], k: number): number {
    const minHeap = new MinPriorityQueue<number>();

    for (const num of nums) {
        if (minHeap.size() < k) minHeap.enqueue(num);
        else if (num > minHeap.front()) {
            minHeap.dequeue();
            minHeap.enqueue(num);
        }
    }
    
    return minHeap.front();
};