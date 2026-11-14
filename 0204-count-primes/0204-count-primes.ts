function countPrimes(n: number): number {
    if (n <= 2) return 0;

    // arr - true: prime - false: not prime
    const isPrime = new Uint8Array(n).fill(1);
    isPrime[0] = 0;
    isPrime[1] = 0;

    for (let i = 2; i * i < n; i++) {
        if (isPrime[i] === 1) {
            // Check not-prme for every dup of i start from i * i
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = 0;
            }
        }
    }

    // count the rest prime
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (isPrime[i] === 1) count++;
    }

    return count;
}