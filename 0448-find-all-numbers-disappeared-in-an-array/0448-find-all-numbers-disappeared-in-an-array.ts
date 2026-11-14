function findDisappearedNumbers(nums: number[]): number[] {
    const numSet = new Set<number>(nums);
    const min = 1;
    const max = min + nums.length; // 4 5 6 7 8 //min=4; length =5;
    const arr = [];
    for (let i = min; i < max; i++) {
        if (!numSet.has(i)) arr.push(i)
    }
    return arr;
};