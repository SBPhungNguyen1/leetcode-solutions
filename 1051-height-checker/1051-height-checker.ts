function heightChecker(heights: number[]): number {
    const sort = heights.toSorted((a, b) => a - b);
    let count = 0;
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== sort[i])
            count++;
    }
    return count;
};