function findMaxLength(nums: number[]): number {
    const map = new Map<number, number>();
    map.set(0, -1);

    let prefixSum = 0;
    let maxLength = 0;

    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i] === 1 ? 1 : -1;

        if (map.has(prefixSum)) {
            const prevIndex = map.get(prefixSum);
            maxLength = Math.max(maxLength, i - prevIndex);
        } else {
            map.set(prefixSum, i);
        }
    }

    return maxLength;
};