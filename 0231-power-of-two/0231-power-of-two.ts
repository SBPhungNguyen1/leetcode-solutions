function isPowerOfTwo(n: number): boolean {
    if (n<=0) return false;
    while(n > 0) {
        if (n===1) return true;
        if (n%2 !== 0) return false;
        n = Math.ceil(n/2);
    }
    return true;
};