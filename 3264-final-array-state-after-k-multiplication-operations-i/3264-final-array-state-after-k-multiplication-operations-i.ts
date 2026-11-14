function getFinalState(nums: number[], k: number, multiplier: number): number[] {
    let curIndex = 0;
    let curNum = Infinity;
    for (let i = 0; i < k; i++) {
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] < curNum) {
                curIndex = i;
                curNum = nums[i];
            }
        }
        nums[curIndex] = nums[curIndex] * multiplier;
        curIndex = 0;
        curNum = Infinity;
    }
    return nums;
};