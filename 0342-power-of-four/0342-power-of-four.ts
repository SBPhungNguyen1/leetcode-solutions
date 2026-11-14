function isPowerOfFour(n: number): boolean {
    if (n===1) return true;
    if (n<4) return false;
    let total = 4;
    while (total <= n) {
        if (total === n) return true;
        else total = total * 4;
    }
    return false;
};