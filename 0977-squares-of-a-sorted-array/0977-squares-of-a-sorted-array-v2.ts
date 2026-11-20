function sortedSquares(nums: number[]): number[] {
    const dup = nums.map(num => num * num);
    return dup.sort((a, b) => a - b);
};