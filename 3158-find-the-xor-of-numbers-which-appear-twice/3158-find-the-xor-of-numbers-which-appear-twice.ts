function duplicateNumbersXOR(nums: number[]): number {
    let map = new Map<number, number>();
    for (const num of nums)
        map.set(num, (map.get(num) ?? 0) + 1);
    let xor = 0;
    for (const [key, value] of map) {
        if (value === 2)
            xor ^= key;
    }
    return xor;
};