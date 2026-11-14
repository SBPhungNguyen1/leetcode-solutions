function arrayPairSum(nums: number[]): number {
    nums.sort((a, b) => a-b) //min -> max;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i%2===0)
            sum = sum + nums[i];
    }
    return sum;
};