function eraseOverlapIntervals(intervals: number[][]): number {
    if (intervals.length < 2) return 0;

    intervals.sort((a, b) => a[1] - b[1]); // min - max

    let count = 0;
    let lastEnd = intervals[0][1];

    for (let i = 1; i < intervals.length; i++) {
        const [start, end] = intervals[i];

        if (start < lastEnd)
            count++;
        else
            lastEnd = end;
    }

    return count;
};