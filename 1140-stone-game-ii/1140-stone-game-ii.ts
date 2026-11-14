function stoneGameII(piles: number[]): number {
    const n = piles.length;

    // suffix[i] = sum of piles[i...n-1]
    const suffix = new Array(n + 1).fill(0);

    for (let i = n - 1; i >= 0; i--) {
        suffix[i] = suffix[i + 1] + piles[i];
    }

    const memo = new Map<string, number>();

    function dp(i: number, M: number): number {
        // Can take all remaining piles
        if (i + 2 * M >= n) {
            return suffix[i];
        }

        const key = `${i},${M}`;

        if (memo.has(key)) {
            return memo.get(key)!;
        }

        let best = 0;

        for (let X = 1; X <= 2 * M; X++) {
            const nextI = i + X;
            const nextM = Math.max(M, X);

            // Total remaining stones
            // - stones the opponent can get
            const current =
                suffix[i] - dp(nextI, nextM);

            best = Math.max(best, current);
        }

        memo.set(key, best);

        return best;
    }

    return dp(0, 1);
}