function getSneakyNumbers(nums: number[]): number[] {
    const map = new Map<number, number>();
    for (const num of nums)
        map.set(num, (map.get(num) ?? 0) + 1);
    const arr = [];
    for (const [key, value] of map) {
        if (value === 2)
            arr.push(key);
    }
    return arr;
};