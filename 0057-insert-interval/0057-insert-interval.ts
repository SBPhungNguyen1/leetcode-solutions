function insert(intervals: number[][], newInterval: number[]): number[][] {
    const result: number[][] = [];
    let [newStart, newEnd] = newInterval;
    let i = 0;
    const n = intervals.length;

    // phase 1: all old interval < newStart
    // -> push all
    while (i < n && intervals[i][1] < newStart) {
        result.push(intervals[i]);
        i++;
    }

    // phase 2: merge all overlapping intervals
    while (i < n && intervals[i][0] <= newEnd) {
        newStart = Math.min(newStart, intervals[i][0]);
        newEnd = Math.max(newEnd, intervals[i][1]);
        i++;
    }
    result.push([newStart, newEnd]);

    // phase 3: the remain intervals
    // -> push all
    while (i < n) {
        result.push(intervals[i]);
        i++;
    }

    return result;
};