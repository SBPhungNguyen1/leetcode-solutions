function findAnagrams(s: string, p: string): number[] {
    if (p.length > s.length)
        return [];

    const mapP = new Map<string, number>();
    for (let i = 0; i < p.length; i++)
        mapP.set(p[i], (mapP.get(p[i]) ?? 0) + 1);

    const mapCur = new Map<string, number>();
    for (let i = 0; i < p.length; i++)
        mapCur.set(s[i], (mapCur.get(s[i]) ?? 0) + 1);
    
    function isAnagram (mapCur, mapP) : boolean {
        for (const [key, value] of mapP) {
            if ((mapCur.get(key) ?? 0) < value)
                return false;
        }
        return true;
    }
    
    const result = [];
    let cur = p.length;
    while (cur <= s.length) {
        if (isAnagram(mapCur, mapP))
            result.push(cur - p.length);
        mapCur.set(s[cur - p.length], (mapCur.get(s[cur - p.length]) ?? 0) - 1);
        mapCur.set(s[cur], (mapCur.get(s[cur]) ?? 0) + 1);
        cur++;
    }
    return result;
};