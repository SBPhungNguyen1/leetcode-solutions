function findMissingElements(nums: number[]): number[] {
    const numSet = new Set(nums);
    const numMin = Math.min(...numSet);
    const numMax = Math.max(...numSet);

    const arr: number[] = []

    for (var i = numMin + 1; i < numMax; i++) {
        if (!numSet.has(i)) arr.push(i);
    }

    return arr;
};