function sumUpTo(x: number): number {
    return (x * (x + 1)) / 2;
}

function lexSmallestNegatedPerm(n: number, target: number): number[] {
    const S = sumUpTo(n);
    if (target < -S || target > S) return [];

    const v: number[] = [];
    for (let i = n; i >= 1; i--) {
        if (sumUpTo(i - 1) - i >= target) {
            target += i;
            v.push(-i);
        } else {
            target -= i;
            v.push(i);
        }
    }

    if (target !== 0) return [];

    v.sort((a, b) => a - b);
    return v;
}