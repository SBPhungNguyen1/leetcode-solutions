function longestSubarray(nums: number[]): number {
    const n = nums.length;
    if (n <= 2) return n;

    let ans = 2;
    let c = 2;

    for (let i = 2; i < n; i++) {
        if (nums[i] === nums[i - 1] + nums[i - 2]) c++;
        else c = 2;
        ans = Math.max(ans, c);
    }

    return ans;
}