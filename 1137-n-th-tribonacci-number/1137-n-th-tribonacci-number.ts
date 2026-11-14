function tribonacci(n: number): number {
    if (n === 0)
        return 0;
    else if (n < 3)
        return 1;
    let n0 = 0;
    let n1 = 1;
    let n2 = 1;
    for (let i = 2; i < n; i++) {
        const sum = n0 + n1 + n2;
        n0 = n1;
        n1 = n2;
        n2 = sum;
    }
    return n2;
};