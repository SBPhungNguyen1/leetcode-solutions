function maximumGap(nums: number[]): number {
    return nums.sort((a,b)=>a-b).reduce((a, c, i) => {
        return Math.abs(nums[i + 1] - c) > a ? Math.abs(nums[i + 1] - c) : a;
    }, 0);
};