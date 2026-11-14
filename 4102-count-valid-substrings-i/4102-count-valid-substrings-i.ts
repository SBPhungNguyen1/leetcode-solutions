function countValidSubstrings(s: string): number {
    let lastB = -1;
    let result = 0;
    for (let right = 0; right < s.length; right++) {
        if (right >= 2 && s[right - 2] === 'a' && s[right - 1] === 'b' && s[right] === 'c')
            lastB = right - 2;
        result += right - lastB;
    }
    return result;
};