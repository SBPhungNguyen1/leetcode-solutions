function isAdjacentDiffAtMostTwo(s: string): boolean {
    for (let i = 0; i < s.length - 1; i++) {
        if (Math.abs(Number(s[i]) - Number(s[i+1])) > 2) return false;
    }
    return true;
};