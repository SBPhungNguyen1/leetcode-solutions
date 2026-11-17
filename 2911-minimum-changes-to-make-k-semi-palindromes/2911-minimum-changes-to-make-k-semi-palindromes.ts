function minimumChanges(s: string, k: number): number {
    const n = s.length;
    const peel = (i: number, j: number, d: number): number => {
        let changes = 0;
        for (; j - i > d; i += d, j -= d)
            for (let t = 0; t < d; t++)
                if (s[i + t] !== s[j - d + t]) changes++;
        return changes;
    };

    const cost: number[][] = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(Infinity));  
    for (let d = 1; 2 * d <= n; d++)
        for (let length = 2 * d; length <= n; length += d)
            for (let i = 0, j = length; j <= n; i++, j++)
                cost[i][j] = Math.min(cost[i][j], peel(i, j, d));

    let best: number[] = [0, ...new Array(n).fill(Infinity)];  

    const extend = (j: number): number => Math.min(...best.slice(0, j - 1).map((changes, i) => changes + cost[i][j]));  

    for (let pieces = 1; pieces < k; pieces++) {  
        const next: number[] = new Array(n + 1).fill(Infinity);
        for (let j = 2 * pieces; j <= n - 2 * (k - pieces); j++)  
            next[j] = extend(j);
        best = next;
    }
    return extend(n);  
}