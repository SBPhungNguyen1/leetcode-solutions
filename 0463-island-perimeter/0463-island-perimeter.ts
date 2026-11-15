function islandPerimeter(grid: number[][]): number {
    let total = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j]) {
                if (!grid[i][j - 1]) 
                    total++;
                if (!grid[i][j + 1]) 
                    total++;
                if (!grid[i - 1] || !grid[i - 1][j]) 
                    total++;
                if (!grid[i + 1] || !grid[i + 1][j]) 
                    total++;
            }
        }
    }

    return total;
};