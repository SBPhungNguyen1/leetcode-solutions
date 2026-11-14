function minMoves(nums: number[]): number {
    let max = Math.max(...nums);
    let count = 0;
    for (let i = 0; i < nums.length; i++)
        count += max - nums[i];
    return count;
};