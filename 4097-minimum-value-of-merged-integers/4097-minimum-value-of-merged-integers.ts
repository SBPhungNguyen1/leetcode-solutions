function minMergedInteger(nums: number[]): number {
    let min = Infinity;
    for (let i = 0; i < nums.length; i+=2) {
        const merged = Number(`${nums[i]}${nums[i+1]}`);
        min = Math.min(min, merged);
    }
    return min;
};