const kthRemainingInteger = (nums: number[], queries: number[][]): number[] => {
    const n = nums.length;

    const evenPrefix = new Int32Array(n + 1);
    for (let i = 0; i < n; i++) {
        evenPrefix[i + 1] = evenPrefix[i] + (nums[i] % 2 === 0 ? 1 : 0);
    }

    const countEvensLeq = (l: number, r: number, val: number): number => {
        let lo = l, hi = r + 1;
        while (lo < hi) {
            const mid = (lo + hi) >>> 1;
            if (nums[mid] <= val) lo = mid + 1;
            else hi = mid;
        }
        return evenPrefix[lo] - evenPrefix[l];
    };

    const result: number[] = [];

    for (const [l, r, k] of queries) {
        const totalEvensRemoved = evenPrefix[r + 1] - evenPrefix[l];

        let lo = k, hi = k + totalEvensRemoved;
        while (lo < hi) {
            const mid = (lo + hi) >>> 1;
            if (mid - countEvensLeq(l, r, 2 * mid) >= k) hi = mid;
            else lo = mid + 1;
        }

        result.push(2 * lo);
    }

    return result;
};