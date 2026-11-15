function findTheDifference(s: string, t: string): string {
    const maps = new Map<string, number>();
    const mapt = new Map<string, number>();

    for (const char of s) 
        maps.set(char, (maps.get(char) || 0) + 1);

    for (const char of t) 
        mapt.set(char, (mapt.get(char) || 0) + 1);

    for (const [key, value] of mapt) {
        if (!maps.has(key) || maps.get(key) !== value)
            return key;
    }
    return "";
}