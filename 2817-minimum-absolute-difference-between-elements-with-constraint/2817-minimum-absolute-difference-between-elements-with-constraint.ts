function minAbsoluteDifference(nums: number[], x: number): number {
    const s: number[] = [];
    let res = Number.MAX_SAFE_INTEGER;

    const insertSorted = (val: number) => {
        let lo = 0, hi = s.length;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (s[mid] < val) lo = mid + 1;
            else hi = mid;
        }
        s.splice(lo, 0, val);
    };

    const upperBound = (val: number): number => {
        let lo = 0, hi = s.length;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (s[mid] <= val) lo = mid + 1;
            else hi = mid;
        }
        return lo;
    };

    for (let i = x; i < nums.length && res > 0; i++) {
        insertSorted(nums[i - x]);
        const idx = upperBound(nums[i]);

        if (idx > 0) res = Math.min(res, nums[i] - s[idx - 1]);
        if (idx < s.length) res = Math.min(res, s[idx] - nums[i]);
    }

    return res;
}