function firstUniqChar(s: string): number {
    const sMap = new Map<string, number>();
    for (var i = 0; i < s.length; i++)
        sMap.set(s[i], (sMap.get(s[i]) ?? 0) +1)
    for (var i = 0; i < s.length; i++) {
        if (sMap.get(s[i]) === 1) return i;
    }
    return -1;
};