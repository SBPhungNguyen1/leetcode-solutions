function sortedSquares(nums: number[]): number[] {
    nums = nums.map((item) => item*item);
    return nums.sort((a, b) => a-b);
};