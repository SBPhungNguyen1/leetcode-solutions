function solveQueries(nums: number[], queries: number[]): number[] {
    const n = nums.length;

    // group number index
    const posMap = new Map<number, number[]>();
    for (let i = 0; i < n; i++) {
        const val = nums[i];
        if (!posMap.has(val))
            posMap.set(val, []);
        posMap.get(val).push(i);
    }

    // cal distance (circular)
    const getDist = (i: number, j: number): number => {
        const diff = Math.abs(i - j);
        return Math.min(diff, n - diff);
    }

    const ans: number[] = [];

    for (const qIdx of queries) {
        const val = nums[qIdx];
        const positions = posMap.get(val);

        if (positions.length <= 1) {
            ans.push(-1);
            continue;
        }

        const m = positions.length;

        let left = 0, right = m - 1;
        let p = -1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (positions[mid] === qIdx) {
                p = mid;
                break;
            } else if (positions[mid] < qIdx) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        // nearest item:
        // - prev: (p - 1 + m) % m
        // - next: (p + 1) % m
        const prevIdx = positions[(p - 1 + m) % m];
        const nextIdx = positions[(p + 1) % m];

        const minDist = Math.min(
            getDist(qIdx, prevIdx),
            getDist(qIdx, nextIdx)
        );

        ans.push(minDist);
    }
    return ans;
};