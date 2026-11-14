function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const stringMap = new Map<string, number>()

    for (var i = 0; i < s.length ; i++) {
        stringMap.set(s[i], (stringMap.get(s[i]) ?? 0) + 1);
    }

    for (var j = 0; j < t.length ; j++) {
        stringMap.set(t[j], (stringMap.get(t[j]) ?? 0) - 1);
    }

    for (const [key, value] of stringMap) {
        if (value !== 0) return false;
    }

    console.log(stringMap)

    return true;
};