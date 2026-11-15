function numOfSubarrays(arr: number[]): number {
    let res = 0, odd = 0, even = 1, prefix = 0;
    for (const num of arr) {
        (prefix += num) & 1 ? ++odd && (res += even) : ++even && (res += odd);
        res %= 1_000_000_007;
    }
    return res;
};