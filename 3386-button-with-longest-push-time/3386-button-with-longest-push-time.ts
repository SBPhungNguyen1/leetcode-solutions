function buttonWithLongestTime(events: number[][]): number {
    let curMax = events[0][1];
    let curIndex = events[0][0];
    for (let i = 1; i < events.length; i++) {
        if (curMax < events[i][1] - events[i - 1][1]) {
            curMax = events[i][1] - events[i - 1][1];
            curIndex = events[i][0];
        } else if (curMax === events[i][1] - events[i - 1][1]) {
            curIndex = Math.min(events[i][0], curIndex);
        }
    }
    return curIndex;
};