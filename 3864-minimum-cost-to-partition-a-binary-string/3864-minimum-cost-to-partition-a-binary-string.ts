const prefixCnts = new Int32Array(1e5 + 1);

function minCost(s: string, encCost: number, flatCost: number): number {
    const n = s.length;

    for (let i = 0; i < n; ++i) {
        prefixCnts[i + 1] = prefixCnts[i] + s.charCodeAt(i) - 48;
    }

    function solve(start: number, end: number): number {
        const x = prefixCnts[end] - prefixCnts[start];
        if (x === 0) return flatCost;

        const len = end - start;
        const cost = x * len * encCost;
        if (len & 1) return cost;

        const mid = (start + end) >> 1;
        return Math.min(cost, solve(start, mid) + solve(mid, end));
    }

    return solve(0, n);
}