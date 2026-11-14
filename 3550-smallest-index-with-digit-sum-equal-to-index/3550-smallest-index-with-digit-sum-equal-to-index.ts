function smallestIndex(nums: number[]): number {
    for(let i = 0; i < nums.length; i++) {
        const str = nums[i].toString().split('');
        const total = str.reduce((sum, acc) => sum + Number(acc), 0);
        if (total === i)
            return i;
    }
    return -1;
};