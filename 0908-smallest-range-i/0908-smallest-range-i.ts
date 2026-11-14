function smallestRangeI(nums: number[], k: number): number {
    nums.sort((a, b) => a-b) // min -> max
    const length = nums.length;
    const minus = nums[length-1] - nums[0];
    if (minus >= k*2) return nums[length-1] - nums[0] -2*k
    console.log(minus);
    return 0;
};