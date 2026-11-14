function maxFrequencyElements(nums: number[]): number {
    const map = new Map();
    let max = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        const freq = (map.get(nums[i]) ?? 0) + 1;
        map.set(nums[i], freq);
        max = Math.max(max, freq);
    }
    let count = 0;
    for (const [key, value] of map) {
        if (value === max)
            count += value;
    }
    return count;
};