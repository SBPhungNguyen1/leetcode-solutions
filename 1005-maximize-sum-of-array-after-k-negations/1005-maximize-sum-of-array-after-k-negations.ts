function largestSumAfterKNegations(nums: number[], k: number): number {
    nums.sort((a, b) => Math.abs(b) - Math.abs(a));

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0 && k > 0) {
            nums[i] = -nums[i];
            k--;
        }
    }

    if (k % 2 === 1) {
        nums[nums.length - 1] = -nums[nums.length - 1];
    }

    return nums.reduce((acc, curr) => acc + curr, 0);
};