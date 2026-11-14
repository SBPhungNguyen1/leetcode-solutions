function limitOccurrences(nums: number[], k: number): number[] {
    const map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++)
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    let result = [];
    for (const [key, value] of map) {
        const repeat = Math.min(value, k);
        for (let i = 0; i < repeat; i++)
            result.push(key);
    }
    return result;
};