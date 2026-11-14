function stoneGameV(stoneValue: number[]): number {
    const n = stoneValue.length;

    // prefix sum
    const prefix: number[] = new Array(n+1).fill(0);
    for (let i = 0; i < n; i++) {
        prefix[i+1] = prefix[i] + stoneValue[i];
    }

    const getSum = (i: number, j: number): number => {
        return prefix[j+1] - prefix[i]
    }

    //
    const memo: number[][] = Array.from({length: n}, () => new Array(n).fill(-1));

    function solve (i: number, j: number) : number {
        if (i === j) return 0;
        if (memo[i][j] !== -1) return memo[i][j];

        let maxScore = 0;

        for (let k = i; k < j; k++) {
            const leftSum = getSum(i, k);
            const rightSum = getSum(k+1, j);

            if (leftSum < rightSum) {
                maxScore = Math.max(maxScore, leftSum + solve(i, k));
            } else if (leftSum > rightSum) {
                maxScore = Math.max(maxScore, rightSum + solve(k + 1, j));
            } else {
                const best = Math.max(solve(i, k), solve(k+1, j));
                maxScore = Math.max(maxScore, leftSum + best)
            }
        }

        return memo[i][j] = maxScore;
    }

    return solve(0, n-1);
};