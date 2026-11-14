function climbStairs(n: number, costs: number[]): number {
    const dp: number[] = Array(n + 1).fill(Infinity)
    dp[0] = 0
    
    for (let i = 1; i <= n; i++) {
        for (let k = 1; k <= 3; k++) {
            const prev = i - k
            if (prev >= 0) {
                dp[i] = Math.min(dp[i], dp[prev] + costs[i - 1] + (k * k))
            }
        }
    }

    // console.log(dp)
    return dp[n]
};