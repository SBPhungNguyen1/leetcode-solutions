function areaOfMaxDiagonal(dimensions: number[][]): number {
    let max = -Infinity;
    let item = 0;
    for (const [x, y] of dimensions) {
        const di = x * x + y * y;
        if (max < di) {
            max = di;
            item = x * y;
        } else if (max === di) {
            item = Math.max(item, x * y);
        }
    }
    return item;
};