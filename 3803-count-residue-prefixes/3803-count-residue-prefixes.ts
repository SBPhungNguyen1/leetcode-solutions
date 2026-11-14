function residuePrefixes(s: string): number {
    const set = new Set<string>();
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        set.add(s[i]);
        if (set.size === ((i + 1) % 3))
            count++;
    }
    return count;
};