function closeStrings(word1: string, word2: string): boolean {
    if (word1.length !== word2.length) return false;

    let freq1 = new Map<string, number>();
    let freq2 = new Map<string, number>();

    for (const c of word1) {
        freq1.set(c, (freq1.get(c) || 0) + 1);
    }
    for (const c of word2) {
        freq2.set(c, (freq2.get(c) || 0) + 1);
    }

    if (new Set(freq1.keys()).size !== new Set(freq2.keys()).size) return false;
    if (![...freq1.keys()].every(k => freq2.has(k))) return false;

    let freqCount1 = new Map<number, number>();
    let freqCount2 = new Map<number, number>();

    for (const count of freq1.values()) {
        freqCount1.set(count, (freqCount1.get(count) || 0) + 1);
    }
    for (const count of freq2.values()) {
        freqCount2.set(count, (freqCount2.get(count) || 0) + 1);
    }

    return [...freqCount1.entries()].every(([key, val]) => freqCount2.get(key) === val);
};