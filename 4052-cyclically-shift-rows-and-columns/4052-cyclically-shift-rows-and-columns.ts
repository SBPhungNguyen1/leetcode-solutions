function cyclicShift(n: number, grid: number[][], rowShift: number[], colShift: number[]): number[][] {
    for (let i = 0; i < n; i++) {
        const k = rowShift[i] % (n);
        grid[i] = [...grid[i].slice(k), ...grid[i].slice(0,k)];
    }
    console.log(grid);
    for (let i = 0; i < n; i++) {
        const k = colShift[i] % (n);
        const col = [];
        for (let j = 0; j < n; j++)
            col.push(grid[j][i]);
        const shift = [...col.slice(k), ...col.slice(0,k)];
        for (let j = 0; j < n; j++)
            grid[j][i] = shift[j];
    }
    return grid;
};