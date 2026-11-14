function countPartitions(nums: number[]): number {
    const sum = nums.reduce((sum, acc) => sum + acc, 0);
    let left = 0;
    let count = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        left += nums[i];
        const right = sum - left;
        if ((left + right) % 2 === 0)
            count++;
    }
    return count;
};