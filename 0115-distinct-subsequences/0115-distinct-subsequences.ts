function numDistinct(s: string, t: string): number {
    const m = s.length;
    const n = t.length;

    if (m < n) return 0;

    const dp = new Array<bigint>(n + 1).fill(0n);
    dp[0] = 1n;

    for (let i = 0; i < m; i++) {
        const charS = s[i];
        for (let j = n; j >= 1; j--) {
            if (charS === t[j - 1]) {
                dp[j] += dp[j - 1];
            }
        }
    }

    return Number(dp[n]);
};