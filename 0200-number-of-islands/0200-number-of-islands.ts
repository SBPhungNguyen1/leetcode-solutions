function numIslands(grid: string[][]): number {
    const rows = grid.length;
    const cols = grid[0].length;

    function fill(r: number, c: number) {
        if (r < 0 || r >= rows || c < 0 || c >= cols)
            return;
        if (grid[r][c] === '0')
            return;
        grid[r][c] = '0';
        fill(r - 1, c);
        fill(r + 1, c);
        fill(r, c - 1);
        fill(r, c + 1);
    }

    let count = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === '1') {
                count++;
                fill(i, j);
            }
        }
    }
    
    return count;
};