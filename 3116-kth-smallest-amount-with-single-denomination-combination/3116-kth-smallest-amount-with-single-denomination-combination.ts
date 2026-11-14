function findKthSmallest(coins: number[], k: number): number {
    const n = coins.length;

    // Helper to calculate Greatest Common Divisor (GCD) using BigInt to prevent 32-bit overflow
    function gcd(a: bigint, b: bigint): bigint {
        while (b !== 0n) {
            const temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    // Helper to calculate Least Common Multiple (LCM)
    function lcm(a: bigint, b: bigint): bigint {
        if (a === 0n || b === 0n) return 0n;
        return (a / gcd(a, b)) * b;
    }

    // Precompute the LCM and subset parity (+1 or -1) for all non-empty subsets
    interface SubsetInfo {
        lcmVal: bigint;
        sign: bigint;
    }

    const subsets: SubsetInfo[] = [];
    const totalSubsets = 1 << n;

    for (let mask = 1; mask < totalSubsets; mask++) {
        let currentLcm = 1n;
        let bitCount = 0;

        for (let i = 0; i < n; i++) {
            if ((mask & (1 << i)) !== 0) {
                bitCount++;
                currentLcm = lcm(currentLcm, BigInt(coins[i]));
            }
        }

        const sign = bitCount % 2 === 1 ? 1n : -1n;
        subsets.push({ lcmVal: currentLcm, sign });
    }

    // Count numbers <= target divisible by at least one coin denomination
    function countValid(target: bigint): bigint {
        let total = 0n;
        for (let i = 0; i < subsets.length; i++) {
            total += subsets[i].sign * (target / subsets[i].lcmVal);
        }
        return total;
    }

    const minCoin = BigInt(Math.min(...coins));
    const targetK = BigInt(k);

    let low = 1n;
    let high = minCoin * targetK;
    let answer = high;

    // Binary search for the smallest amount containing at least k valid multiples
    while (low <= high) {
        const mid = low + (high - low) / 2n;

        if (countValid(mid) >= targetK) {
            answer = mid;
            high = mid - 1n;
        } else {
            low = mid + 1n;
        }
    }

    return Number(answer);
}