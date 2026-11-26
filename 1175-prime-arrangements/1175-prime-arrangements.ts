function numPrimeArrangements(n: number): number {
    const MOD = 1e9 + 7;
    let countPrime = 0;

    for (let i = 1; i <= n; i++) {
        if (isPrime(i)) {
            countPrime++;
        }
    }

    let res = 1;

    for (let i = 2; i <= countPrime; i++)
        res = (res * i) % MOD;

    for (let i = 2; i <= n - countPrime; i++)
        res = (res * i) % MOD;

    return res;
};

function isPrime(num: number): boolean {
    if (num < 2) 
        return false;
    for (let i = 2; i * i <= num; i++)
        if (num % i === 0)
            return false;
    return true;
}