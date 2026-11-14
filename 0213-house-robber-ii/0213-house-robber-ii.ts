function rob(nums: number[]): number {
    if (nums.length <= 3) {
        return Math.max(...nums)
    }
    const n = nums.length
    const _dp = (nums: number[]) => {
        const dp: Record<string, any> = {}
        dp[0] = nums[0]
        dp[1] = nums[1]

        for (let i = 2; i <= n - 1; i++) {
        dp[i] = Math.max(dp[i - 2] ?? 0, dp[i - 3] ?? 0) + nums[i]
        }
        return dp
    }
    const dp1 = _dp(nums)
    // not affect number 0
    nums[0] = 0
    const dp2 = _dp(nums)

    dp1[n - 1] = dp2[n - 1]

    return Math.max(...Object.values(dp1))
};