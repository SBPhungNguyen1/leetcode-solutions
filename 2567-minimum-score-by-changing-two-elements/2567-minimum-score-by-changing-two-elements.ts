// score = high + low
// high - min -- best be 0
// low - min -- best be 0 -- always
// [1,4,7,8,5] -- [1,4,5,7,8]
// [x,x,5,7,8] -- [1,4,5,x,x]
function minimizeSum(nums: number[]): number {
    if (nums.length === 3)  return 0;
    nums.sort((a, b) => a - b);
    return Math.min(nums[nums.length - 1] - nums[2], 
                    nums[nums.length - 3] - nums[0],
                    nums[nums.length - 2] - nums[1]);
};