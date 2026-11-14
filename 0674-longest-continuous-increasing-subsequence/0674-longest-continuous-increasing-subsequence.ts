function findLengthOfLCIS(nums: number[]): number {
    let max = 0;
    let count = 1;
    for (let i = 0; i < nums.length-1; i++) {
        if (nums[i] < nums[i+1])
            count++;
        else {
            max = Math.max(max, count);
            count = 1;
        }
    }
    return Math.max(max, count);
}