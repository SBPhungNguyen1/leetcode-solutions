function largestOverlap(img1: number[][], img2: number[][]): number {
    const n = img1.length;
    const ones1: [number, number][]= [];
    const ones2: [number, number][] = [];

    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            if (img1[r][c] === 1) ones1.push([r, c]);
            if (img2[r][c] === 1) ones2.push([r, c]);
        }
    }

    const vectorCount = new Map<number, number>();
    let maxOverlap = 0;
    for (const [r1, c1] of ones1) {
        for (const [r2, c2] of ones2) {
            const dr = r2 - r1;
            const dc = c2 - c1;

            const key = (dr + 100) * 1000 + (dc + 100);
            const count = (vectorCount.get(key) || 0) + 1;
            vectorCount.set(key, count);

            if (count > maxOverlap)
                maxOverlap = count;
        }
    }

    return maxOverlap;
};