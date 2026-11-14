function largestInteger(nums: number[], k: number): number {
    const n = nums.length;
    if (k === n) {
        return Math.max(...nums);
    }
    const count = new Map<number, number>();
    for (const num of nums) {
        count.set(num, (count.get(num) || 0) + 1);
    }
    if (k === 1) {
        let maxVal = -1;
        for (const [num, freq] of count.entries()) {
            if (freq === 1) {
                maxVal = Math.max(maxVal, num);
            }
        }
        return maxVal;
    }
    let ans = -1;
    if (count.get(nums[0]) === 1) {
        ans = Math.max(ans, nums[0]);
    }
    if (count.get(nums[n - 1]) === 1) {
        ans = Math.max(ans, nums[n - 1]);
    }
    return ans;
}