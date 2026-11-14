function absDifference(nums: number[], k: number): number {
    nums.sort((a, b) => a - b) // min - max
    let total = 0;
    for (let i = 0; i < k; i++) {
        total = total + nums[i] - nums[nums.length - 1 - i];
    }
    return Math.abs(total);
};