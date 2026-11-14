function maxDepth(s: string): number {
    let [m, c] = [0, 0];
    for (const e of s)
        if (e === '(') c++;
        else if (e === ')') m = Math.max(m, c--);
    return Math.max(m, c);
};