function getLeastFrequentDigit(n: number): number {
    const str = n.toString().split('')
    const sorted = str.sort((a, b) => Number(a) - Number(b));
    console.log(sorted);
    const map = new Map<string, number>();
    for (const item of sorted)
        map.set(item, (map.get(item) || 0) + 1);
    let min = Infinity;
    let minValue = -1;
    for (const [key, value] of map) {
        if (value < min) {
            min = value;
            minValue = Number(key);
        }
    }
    return minValue;
};