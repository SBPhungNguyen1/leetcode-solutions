function singleNumber(nums: number[]): number {
    const numSet = new Set<number>(nums);
    console.log(numSet);
    for (const item of numSet) {
        let flag = 0;
        for (var i = 0;i<nums.length;i++) {
            if(item === nums[i]) flag++;
        }
        if (flag === 1) return item;
    }
};