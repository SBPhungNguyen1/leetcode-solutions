function maximumWeight(intervals: number[][]): number[] {
    const n = intervals.length;

    // attach original index: [l, r, weight, originalIndex]
    const items: [number, number, number, number][] = intervals.map((iv, idx) => [
        iv[0],
        iv[1],
        iv[2],
        idx,
    ]);

    // sort intervals by right endpoint ascending
    items.sort((a, b) => a[1] - b[1]);

    // extract sorted right endpoints for binary search
    const rEndpoints = items.map((item) => item[1]);

    // find the rightmost interval index with right endpoint < targetL
    function findPrev(targetL: number): number {
        let low = 0,
            high = n - 1;
        let ans = -1;
        while (low <= high) {
            const mid = (low + high) >> 1;
            if (rEndpoints[mid] < targetL) {
                ans = mid;
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return ans; // -1 if none exists
    }

    interface State {
        score: number;
        indices: number[];
    }

    // compare two states: returns true if candidate is strictly better than current
    function isBetter(candidate: State, current: State): boolean {
        if (candidate.score !== current.score) {
            return candidate.score > current.score;
        }
        const lenA = candidate.indices.length;
        const lenB = current.indices.length;
        const minLen = Math.min(lenA, lenB);

        for (let i = 0; i < minLen; i++) {
            if (candidate.indices[i] !== current.indices[i]) {
                return candidate.indices[i] < current.indices[i];
            }
        }
        return lenA < lenB;
    }

    // dp[i][k]: optimal state considering first i intervals with k intervals chosen
    const dp: State[][] = Array.from({ length: n + 1 }, () =>
        Array.from({ length: 5 }, () => ({ score: 0, indices: [] }))
    );

    for (let i = 1; i <= n; i++) {
        const [l, , weight, origIdx] = items[i - 1];
        const prevIdx = findPrev(l); // returns index in 0-based items, mapped to prevIdx + 1 in dp

        for (let k = 1; k <= 4; k++) {
            // opt 1: do not pick current interval
            let best: State = {
                score: dp[i - 1][k].score,
                indices: [...dp[i - 1][k].indices],
            };

            // opt 2: pick current interval
            if (k === 1) {
                const candidate: State = {
                    score: weight,
                    indices: [origIdx],
                };
                if (isBetter(candidate, best)) {
                    best = candidate;
                }
            } else {
                const prevDp = dp[prevIdx + 1][k - 1];
                if (prevDp.score > 0) {
                    const newIndices = [...prevDp.indices, origIdx].sort((a, b) => a - b);
                    const candidate: State = {
                        score: prevDp.score + weight,
                        indices: newIndices,
                    };
                    if (isBetter(candidate, best)) {
                        best = candidate;
                    }
                }
            }

            dp[i][k] = best;
        }
    }

    // determine the best across all k in 1..4
    let result: State = { score: 0, indices: [] };
    for (let k = 1; k <= 4; k++) {
        const candidate = dp[n][k];
        if (candidate.score > 0 && isBetter(candidate, result)) {
            result = candidate;
        }
    }

    return result.indices;
}