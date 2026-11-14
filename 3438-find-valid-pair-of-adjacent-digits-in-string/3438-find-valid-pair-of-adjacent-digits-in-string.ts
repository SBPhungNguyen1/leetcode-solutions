function findValidPair(s: string): string {
    const map = new Map<string, number>();
    for (let i = 0; i < s.length; i++)
        map.set(s[i], (map.get(s[i]) ?? 0) + 1);
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] !== s[i+1]) {
            if (map.get(s[i]) === Number(s[i]) && map.get(s[i+1]) === Number(s[i+1]))
                return s[i] + s[i+1];
        }
    }
    return "";
};