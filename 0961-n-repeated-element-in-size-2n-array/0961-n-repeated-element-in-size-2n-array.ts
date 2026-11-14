function repeatedNTimes(nums: number[]): number {
    const map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) ?? 0) + 1);
    }

    const n = nums.length/2;


    for (const [key, value] of map) {
        if (value === n)
            return key;
    }
    return -1;
};