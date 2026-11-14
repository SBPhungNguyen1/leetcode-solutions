function isPowerOfThree(n: number): boolean {
    if (n===1) return true;
    if (n < 3) return false;
    let total = 3;
    while (total <= n) {
        if (n === total) return true;
        else total = total*3;
    }
    return false;
};