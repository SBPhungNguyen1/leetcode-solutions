function maxSum(nums: number[]): number {
    const set = new Set<number>(nums);
    const max = Math.max(...nums);
    let sum = max;
    for (const item of set) {
        if (item === max)   continue;
        if (item < 0) continue;
        sum += item;
    }
    return sum;
};