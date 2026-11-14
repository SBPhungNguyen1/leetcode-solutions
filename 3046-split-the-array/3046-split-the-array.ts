function isPossibleToSplit(nums: number[]): boolean {
    const [o, t] = [new Set<number>(), new Set<number>()];
    for (const n of nums)
        if (t.has(n)) return false;
        else if (o.has(n)) t.add(n);
        else o.add(n);
    return true;
};