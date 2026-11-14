function sumDivisibleByK(nums: number[], k: number): number {
    const map = new Map<number, number>();
    for (const num of nums) 
        map.set(num, (map.get(num) || 0) + 1);
    let sum = 0;
    for (const [key, value] of map) {
        if (value % k === 0)
            sum += key * value;
    }
    return sum;
};