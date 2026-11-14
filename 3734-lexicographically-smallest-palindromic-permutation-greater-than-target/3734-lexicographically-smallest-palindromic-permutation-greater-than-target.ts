function lexPalindromicPermutation(s: string, target: string): string {
    const n = s.length;
    const m = Math.floor(n / 2);

    const count = new Array(26).fill(0);
    for (let i = 0; i < n; i++) {
        count[s.charCodeAt(i) - 97]++;
    }

    let oddCount = 0;
    let oddChar = '';
    for (let i = 0; i < 26; i++) {
        if (count[i] % 2 !== 0) {
            oddCount++;
            oddChar = String.fromCharCode(97 + i);
        }
    }

    if (oddCount > 1) {
        return "";
    }

    const halfCount = new Array(26).fill(0);
    for (let i = 0; i < 26; i++) {
        halfCount[i] = Math.floor(count[i] / 2);
    }

    const buildPalindrome = (firstHalf: string): string => {
        let rev = "";
        for (let i = firstHalf.length - 1; i >= 0; i--) {
            rev += firstHalf[i];
        }
        return firstHalf + (n % 2 !== 0 ? oddChar : "") + rev;
    };

    // Case 1: Check if using the exact prefix target[0...m-1] works
    const targetHalfCount = new Array(26).fill(0);
    let canMatchPrefix = true;
    for (let i = 0; i < m; i++) {
        targetHalfCount[target.charCodeAt(i) - 97]++;
    }

    let isExactMatch = true;
    for (let i = 0; i < 26; i++) {
        if (targetHalfCount[i] !== halfCount[i]) {
            isExactMatch = false;
            break;
        }
    }

    if (isExactMatch) {
        const p = buildPalindrome(target.slice(0, m));
        if (p > target) {
            return p;
        }
    }

    // Case 2: Diverge at index i < m
    for (let i = m - 1; i >= 0; i--) {
        const rem = [...halfCount];
        let validPrefix = true;

        for (let j = 0; j < i; j++) {
            const idx = target.charCodeAt(j) - 97;
            rem[idx]--;
            if (rem[idx] < 0) {
                validPrefix = false;
                break;
            }
        }

        if (!validPrefix) continue;

        const targetCharIdx = target.charCodeAt(i) - 97;
        let bestCharIdx = -1;

        for (let c = targetCharIdx + 1; c < 26; c++) {
            if (rem[c] > 0) {
                bestCharIdx = c;
                break;
            }
        }

        if (bestCharIdx !== -1) {
            let firstHalf = target.slice(0, i) + String.fromCharCode(97 + bestCharIdx);
            rem[bestCharIdx]--;

            for (let c = 0; c < 26; c++) {
                while (rem[c] > 0) {
                    firstHalf += String.fromCharCode(97 + c);
                    rem[c]--;
                }
            }

            return buildPalindrome(firstHalf);
        }
    }

    return "";
}