function groupAnagrams(strs: string[]): string[][] {
    const map = new Map<string, string[]>();
    for (const item of strs) {
        const sorted = item.split('').sort().join('');
        if (!map.has(sorted))
            map.set(sorted, []);
        const arr = map.get(sorted);
        arr.push(item);
        map.set(sorted, arr);
    }
    const arr = [];
    for (const [key, value] of map)
        arr.push(value)
    return arr;
};