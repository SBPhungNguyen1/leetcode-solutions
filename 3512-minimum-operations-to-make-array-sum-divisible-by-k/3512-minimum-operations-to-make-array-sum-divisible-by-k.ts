function minOperations(nums: number[], k: number): number {
    const sum = nums.reduce((sum, acc) => sum + acc, 0);
    return sum % k;
};