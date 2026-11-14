function findErrorNums(nums: number[]): number[] {
    const length = nums.length;
    const numsMap = new Map<number, number>();
    for (let i = 0; i < length; i++) 
        numsMap.set(nums[i], (numsMap.get(nums[i]) ?? 0) + 1);
    const arr = [];
    for(const [key, value] of numsMap) {
        if (value === 2) arr.push(key);
    }
    for (let i = 1; i <= length; i++) {
        if (!numsMap.has(i)) arr.push(i);
    }
    return arr;
};