function minRotations(s: string): number {
    let cur = 0;
    let r = 0;
    for (const c of s) {
        const next = Number(c);
        const diff = Math.abs(cur - next);
        r += Math.min(diff, 10 - diff);
        cur = next;
    }
    return r;
};