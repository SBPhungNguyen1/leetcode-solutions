function minMoves(classroom: string[], energy: number): number {
    const m = classroom.length;
    const n = classroom[0].length;

    let startR = -1;
    let startC = -1;
    const litters: [number, number][] = [];

    // Map each 'L' to a unique bit index
    const litterIdx: number[][] = Array.from({ length: m }, () => Array(n).fill(-1));

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            const ch = classroom[r][c];
            if (ch === 'S') {
                startR = r;
                startC = c;
            } else if (ch === 'L') {
                litterIdx[r][c] = litters.length;
                litters.push([r, c]);
            }
        }
    }

    const k = litters.length;
    if (k === 0) return 0;
    const targetMask = (1 << k) - 1;

    // bestEnergy[r][c][mask] --> the max remaining energy reached
    const bestEnergy: Int16Array[] = Array.from({ length: m * n }, () =>
        new Int16Array(1 << k).fill(-1)
    );

    // Flatten coordinate helper: (r, c) -> r * n + c
    const toIndex = (r: number, c: number) => r * n + c;

    // BFS queue storing [r, c, mask, energy, steps]
    const queue: [number, number, number, number, number][] = [
        [startR, startC, 0, energy, 0]
    ];
    let head = 0;

    bestEnergy[toIndex(startR, startC)][0] = energy;

    const dr = [-1, 1, 0, 0];
    const dc = [0, 0, -1, 1];

    while (head < queue.length) {
        const [r, c, mask, e, steps] = queue[head++];

        // Skip dominated branches
        if (e < bestEnergy[toIndex(r, c)][mask]) continue;

        for (let i = 0; i < 4; i++) {
            const nr = r + dr[i];
            const nc = c + dc[i];

            if (nr < 0 || nr >= m || nc < 0 || nc >= n) continue;
            if (classroom[nr][nc] === 'X') continue;

            let nextE = e - 1;
            if (nextE < 0) continue;

            const cell = classroom[nr][nc];
            if (cell === 'R') {
                nextE = energy;
            }

            let nextMask = mask;
            if (cell === 'L') {
                nextMask |= (1 << litterIdx[nr][nc]);
            }

            if (nextMask === targetMask) {
                return steps + 1;
            }

            const nextPos = toIndex(nr, nc);
            if (nextE > bestEnergy[nextPos][nextMask]) {
                bestEnergy[nextPos][nextMask] = nextE;
                queue.push([nr, nc, nextMask, nextE, steps + 1]);
            }
        }
    }

    return -1;
}