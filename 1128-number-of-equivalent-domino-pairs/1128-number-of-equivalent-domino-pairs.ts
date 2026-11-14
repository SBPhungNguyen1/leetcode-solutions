function numEquivDominoPairs(dominoes: number[][]): number {
    let map = new Map<string, number>();
    let count = 0;
    for(const row of dominoes)
    {
        const key = [Math.min(row[0], row[1]), Math.max(row[0], row[1])].toString();
        map.set(key, (map.get(key) ?? 0) + 1);
    }
    for (const dupes of map.values())
        count += (dupes * (dupes - 1)) / 2;
    return count;
};