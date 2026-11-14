function merge(intervals: number[][]): number[][] {
    if (intervals.length <= 1) return intervals;

    intervals.sort((a, b) => a[0] - b[0]) // min - max

    const merged : number[][] = [];
    merged.push(intervals[0]);

    for (let i = 0; i < intervals.length; i++) {
        const current = intervals[i];
        const last = merged[merged.length - 1];

        if (current[0] <= last[1]) {
            last[1] = Math.max(last[1], current[1]);
        } else {
            merged.push(current);
        }
    }

    return merged;
};