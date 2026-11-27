function orangesRotting(grid: number[][]): number {
    // 1. ini
    const m = grid.length;
    const n = grid[0].length;

    const queue = []; // 2 dimensions

    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];

    let freshCount = 0;
    let minutes = 0;

    // 2. find all starting ptn - rotten oranges
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j]);
            } else if (grid[i][j] === 1) {
                freshCount++;
            }
        }
    }

    // 3. multi-src bfs
    let head = 0;

    while (head < queue.length && freshCount > 0) {
        const size = queue.length - head;

        // process curr level
        for (let i = 0; i < size; i++) {
            const [x, y] = queue[head++];

            // explore 4 directions
            for (let k = 0; k < 4; k++) {
                const nx = x + dx[k];
                const ny = y + dy[k];

                // check boundary
                if (nx < 0 || nx >= m || ny < 0 || ny >= n)
                    continue;

                // check valid neighbor
                if (grid[nx][ny] !== 1)
                    continue;

                // mark visited immediately
                grid[nx][ny] = 2;

                // update fresh count
                freshCount--;

                // add to next level
                queue.push([nx, ny]);
            }
        }

        // move to next minute
        minutes++;
    }

    // 4. return result
    return freshCount === 0 ? minutes : -1;
};