function countIntersectingIntervals(intervals: number[][]): number {
    let count = 0;
    for (let i = 0; i < intervals.length - 1; i++) {
        const [start, end] = intervals[i];
        for (let j = i + 1; j < intervals.length; j++) {
            const [start2, end2] = intervals[j];
            if (start > end2 || end < start2)
                continue;
            count++;
        }
    }
    return count;
};