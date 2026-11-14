function stoneGameVIII(stones: number[]): number {
    const n = stones.length;
    for (let i = 1; i < n; i++) {
        stones[i] += stones[i-1];
    }

    let ans = stones[n - 1];
    for (let i = n - 2; i > 0; i--) {
        ans = Math.max(ans, stones[i] - ans);
    }

    return ans;
};