function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    const mapNext = new Map<number, number>();
    const stack = [];

    for (const num of nums2) {
        while (stack.length > 0 && stack[stack.length - 1] < num) {
            const smallerNum = stack.pop();
            mapNext.set(smallerNum, num);
        }
        stack.push(num);
    }

    while (stack.length > 0) {
        mapNext.set(stack.pop(), -1);
    }

    return nums1.map(num => mapNext.get(num) || -1);
}