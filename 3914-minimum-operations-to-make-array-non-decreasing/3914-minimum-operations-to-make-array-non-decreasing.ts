function minOperations(nums: number[]): number {
    let s = 0;
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] > nums[i]) {
            s += nums[i - 1] - nums[i];
        }
    }
    
    return s;
};