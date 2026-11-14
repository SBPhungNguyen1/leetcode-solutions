function hasSpecialSubstring(s: string, k: number): boolean {
    for (let i = 0; i <= s.length - k; i++) {
        const char = s[i];
        
        let allSame = true;
        for (let j = i; j < i + k; j++) {
            if (s[j] !== char) {
                allSame = false;
                break;
            }
        }
        if (!allSame) continue;

        if (i > 0 && s[i - 1] === char) continue;

        if (i + k < s.length && s[i + k] === char) continue;

        return true;
    }

    return false;
}