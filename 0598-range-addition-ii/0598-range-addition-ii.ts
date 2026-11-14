function maxCount(m: number, n: number, ops: number[][]): number {
    if (ops.length === 0) return m * n;
    let minC = 4 * 100000 + 1;
    let minR = 4 * 100000 + 1;
    for (const [col, row] of ops) {
        minC = Math.min(minC, col);
        minR = Math.min(minR, row);
    }
    return minC * minR;
};