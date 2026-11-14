function largestInteger(n: number, s: number): number {
    if (s < 0 || s > 9 * n) return -1;

    let result = '';

    for (let i = 0; i < n; i++) {
        const digit = Math.min(9, s);

        result += digit;
        s -= digit;
    }

    return Number(result);
}