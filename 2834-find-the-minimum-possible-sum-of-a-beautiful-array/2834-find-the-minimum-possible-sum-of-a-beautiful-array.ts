function minimumPossibleSum(n: number, target: number): number {
    const MOD = 1_000_000_007n;

    const N = BigInt(n);
    const T = BigInt(target);

    const x = T / 2n;
    const k = N < x ? N : x;

    let ans = k * (k + 1n) / 2n;

    const remaining = N - k;

    const sum = remaining * (2n * T + remaining - 1n) / 2n;

    ans += sum;

    return Number(ans % MOD);
}