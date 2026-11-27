function isInterleave(s1: string, s2: string, s3: string): boolean {
    // 1. ini
    const m = s1.length;
    const n = s2.length;

    // 2. check
    if (m + n !== s3.length) 
        return false;

    // 3. ini dp
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));

    // 4. base case
    dp[0][0] = true;

    // 5. loop
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {

            // 5.1. take from s1
            if (i > 0 && dp[i - 1][j] && s1[i - 1] === s3[i + j - 1])
                dp[i][j] = true;

            // 5.2 take from s2
            if (j > 0 && dp[i][j - 1] && s2[j - 1] === s3[i + j - 1])
                dp[i][j] = true;
        }
    }

    return dp[m][n];
}
