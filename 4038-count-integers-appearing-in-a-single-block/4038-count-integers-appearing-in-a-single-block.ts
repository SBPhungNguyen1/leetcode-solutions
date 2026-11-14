function countSpecialIntegers(nums: number[]): number {
    const blockCount = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        if (i === 0 || nums[i] !== nums[i-1]) {
            blockCount.set(nums[i], (blockCount.get(nums[i]) ?? 0) + 1);
        }
    }

    let specialCount = 0;
    for (const count of blockCount.values()) {
        if (count === 1) 
            specialCount++;
    }

    return specialCount;
};