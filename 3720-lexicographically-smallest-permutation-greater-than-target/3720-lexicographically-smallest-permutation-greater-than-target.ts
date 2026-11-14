function lexGreaterPermutation(s: string, target: string): string {
    const n = s.length;
    const totalCount = new Array<number>(26).fill(0);
    const aCode = 'a'.charCodeAt(0);

    for (let i = 0; i < n; i++) {
        totalCount[s.charCodeAt(i) - aCode]++;
    }

    // Find the maximum valid prefix length that s can form from target
    const targetCount = new Array<number>(26).fill(0);
    let maxValidPrefix = 0;

    for (let i = 0; i < n; i++) {
        const charIdx = target.charCodeAt(i) - aCode;
        targetCount[charIdx]++;
        if (targetCount[charIdx] > totalCount[charIdx]) {
            break;
        }
        maxValidPrefix = i + 1;
    }

    // Try divergence index i from largest possible down to 0
    for (let i = Math.min(n - 1, maxValidPrefix); i >= 0; i--) {
        const rem = [...totalCount];
        for (let k = 0; k < i; k++) {
            rem[target.charCodeAt(k) - aCode]--;
        }

        const targetCharIdx = target.charCodeAt(i) - aCode;
        let bestChar = -1;

        // Pick the smallest available character strictly greater than target[i]
        for (let c = targetCharIdx + 1; c < 26; c++) {
            if (rem[c] > 0) {
                bestChar = c;
                break;
            }
        }

        if (bestChar !== -1) {
            rem[bestChar]--;
            const result: string[] = [target.slice(0, i), String.fromCharCode(aCode + bestChar)];

            // Append remaining characters in ascending lexicographical order
            for (let c = 0; c < 26; c++) {
                if (rem[c] > 0) {
                    result.push(String.fromCharCode(aCode + c).repeat(rem[c]));
                }
            }

            return result.join('');
        }
    }

    return "";
};