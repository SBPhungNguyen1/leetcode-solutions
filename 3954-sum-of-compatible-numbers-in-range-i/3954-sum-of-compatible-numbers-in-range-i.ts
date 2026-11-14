function sumOfGoodIntegers(n: number, k: number): number {
    // | n - x | <= k
    // => (n - k) <= x <= (n + k) --- (must >= 0)

    const left = Math.max(1, n - k);
    const right = n + k;
    let sum = 0;

    for (let x = left; x <= right; x++) {
        if ((n & x) === 0) {
            sum += x;
        }
    }

    return sum;
}