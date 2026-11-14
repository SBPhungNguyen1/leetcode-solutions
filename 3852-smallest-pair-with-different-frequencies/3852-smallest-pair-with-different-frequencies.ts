function minDistinctFreqPair(nums: number[]): number[] {
    nums.sort((a, b) => a - b) // min -> max
    const map = new Map<number, number>();
    for (const num of nums)
        map.set(num, (map.get(num) || 0) + 1);
    const key1 = nums[0];
    const value1 = map.get(nums[0]);
    for (const [key, value] of map) {
        if (key !== key1 && value !== value1) 
            return [key1, key];
    }
    return [-1, -1];
};