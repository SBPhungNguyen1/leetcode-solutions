function prefixConnected(words: string[], k: number): number {
    const freq: { [key: string]: number } = {};
    for (const w of words) {
        const pref = w.slice(0, k);
        if (pref.length >= k) {
            freq[pref] = (freq[pref] || 0) + 1;
        }
    }

    let count = 0;
    for (const value of Object.values(freq)) {
        if (value > 1) {
            count++;
        }
    }
    return count;
};