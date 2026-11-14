function rob(nums: number[]): number {
    const dp = new Array(nums.length+1).fill(0);
    console.log(dp)
    dp[1] = nums[0];
    for (let i = 2; i <= nums.length; i++) {
        dp[i] = Math.max(dp[i-2] + nums[i-1], dp[i-1]);
        console.log(i, dp[i], dp[i-2] + nums[i-1], dp[i-1])
    }
    console.log(dp)
    return dp[dp.length-1];
};