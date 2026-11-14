function maximumProduct(nums: number[]): number {
    nums.sort((a,b) => a-b); //min - max
    const length = nums.length;
    const result = Math.max(nums[0] * nums[1] * nums[length-1], nums[length-1] * nums[length-2] * nums[length-3]);
    return result;
};