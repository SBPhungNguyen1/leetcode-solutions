function minimumDeletions(nums: number[]): number {
    const n = nums.length;
    if (n <= 2) return n;

    let minIdx = 0;
    let maxIdx = 0;

    for (let k = 1; k < n; k++) {
        if (nums[k] < nums[minIdx]) minIdx = k;
        if (nums[k] > nums[maxIdx]) maxIdx = k;
    }

    const i = Math.min(minIdx, maxIdx);
    const j = Math.max(minIdx, maxIdx);

    const fromFront = j + 1;
    const fromBack = n - i;
    const fromBoth = (i + 1) + (n - j);

    return Math.min(fromFront, fromBack, fromBoth);
};