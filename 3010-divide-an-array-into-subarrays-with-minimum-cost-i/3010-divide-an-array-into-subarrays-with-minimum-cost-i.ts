function minimumCost(nums: number[]): number {
    let sum = nums[0];
    const subarr = nums.slice(1);
    subarr.sort((a, b) => a - b);
    sum += subarr[0] + subarr[1];
    return sum;
};