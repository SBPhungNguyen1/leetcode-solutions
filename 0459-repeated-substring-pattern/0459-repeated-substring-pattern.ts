function repeatedSubstringPattern(s: string): boolean {
    for (let i = 1; i <= Math.floor(s.length/2) ; i++) {
        if (s.length % i !== 0) continue;

        const pattern = s.slice(0,i);

        if (pattern.repeat(s.length/i) === s)
            return true
    }
    return false
};