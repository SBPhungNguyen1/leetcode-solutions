function satisfiesConditions(grid: number[][]): boolean {
    const countR = grid.length;
    const countC = grid[0].length;

    for (let i = 0; i < countR; i++) {
        for (let j = 0; j < countC; j++) {
            if (i < countR - 1) {
                if (grid[i][j] !== grid[i + 1][j])
                    return false;
            }
            if (j < countC - 1) {
                if (grid[i][j] === grid[i][j + 1])
                    return false;
            }
        }
    }
    return true;
};