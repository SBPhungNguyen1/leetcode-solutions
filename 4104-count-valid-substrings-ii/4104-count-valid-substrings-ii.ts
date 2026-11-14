function countValidSubstrings(s: string): number {
    let lateA = -1;
    let bestA = -1;
    let lastBad = -1;
    let result = 0;
    for (let right = 0; right < s.length; right++) {
        const ch = s[right];
        if (ch === 'a')
            lateA = right;
        else if (ch === 'b') {
            if (lateA !== -1)
                bestA = Math.max(bestA, lateA);
        } else if (ch === 'c') {
            if (bestA !== -1)
                lastBad = Math.max(lastBad, bestA);
        }
        result += right - lastBad;
    }
    return result;
};