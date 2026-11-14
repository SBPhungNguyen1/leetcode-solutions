function minGenerations(points: number[][], target: number[]): number {
    const targetKey = target.join(',');
    const pool = new Set<string>(points.map(p => p.join(',')));

    if (pool.has(targetKey)) return 0;
    if (pool.size < 2) return -1;

    type P = readonly [number, number, number];
    let generation = 0;

    while (true) {
        generation++;

        const arr: P[] = Array.from(pool, s => {
            const [x, y, z] = s.split(',').map(Number);
            return [x, y, z] as const;
        });

        const fresh: string[] = [];

        for (let i = 0; i < arr.length; i++) {
            const [x1, y1, z1] = arr[i];
            for (let j = i + 1; j < arr.length; j++) {
                const [x2, y2, z2] = arr[j];

                const key = `${(x1 + x2) >> 1},${(y1 + y2) >> 1},${(z1 + z2) >> 1}`;
                if (key === targetKey) return generation;
                if (!pool.has(key)) fresh.push(key);
            }
        }

        if (fresh.length === 0) return -1;
        for (const k of fresh) pool.add(k);
    }
}