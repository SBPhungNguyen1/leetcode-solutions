function scoreBalance(s: string): boolean {
    let sum = 0;
    for (let i = 0; i < s.length; i++)
        sum += s[i].charCodeAt(0) - 96;
    if (sum % 2 === 1) return false;
    let left = 0;
    for (let i = 0; i < s.length; i++) {
        left += s[i].charCodeAt(0) - 96;
        const right = sum - left;
        if (left === right) return true;
    }
    return false;
};