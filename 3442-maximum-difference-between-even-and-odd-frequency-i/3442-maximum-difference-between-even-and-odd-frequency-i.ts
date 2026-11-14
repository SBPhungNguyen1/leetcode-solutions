function maxDifference(s: string): number {
    const map = new Map<string, number>();
    for (let i = 0; i < s.length; i++)
        map.set(s[i], (map.get(s[i]) || 0) + 1);
    let minEven = Infinity;
    let maxOdd = -Infinity;
    for (const [key, value] of map) {
        if (value % 2 === 1) {
            maxOdd = Math.max(maxOdd, value);
        } else {
            minEven = Math.min(minEven, value);
        }
    }
    return maxOdd - minEven;
};