function isMiddleElementUnique(nums: number[]): boolean {
    const map = new Map<number, number>();
    for (const num of nums)
        map.set(num, (map.get(num) || 0) + 1);
    const midNum = nums[Math.floor(nums.length / 2)];
    if (map.get(midNum) === 1) return true;
    return false;
};