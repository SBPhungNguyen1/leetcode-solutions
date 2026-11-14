function groupAnagrams(strs: string[]): string[][] {
    const map = new Map<string, string[]>();
    for (const item of strs) {
        const sortedKey = item.split('').sort().join('');
        console.log(sortedKey);
        if (!map.has(sortedKey)) {
            map.set(sortedKey, []);
        }
        map.get(sortedKey).push(item);
    }
    return Array.from(map.values());
};